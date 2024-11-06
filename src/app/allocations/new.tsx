import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Link, router, Stack } from 'expo-router'
import database, { accountsCollection, allocationsCollection } from '../../../db'
import { withObservables } from '@nozbe/watermelondb/react'
import Account from '../../../model/Account'
import Allocation from '../../../model/Allocation'

const newAllocations = ({ accounts }: { accounts: Account[] }) => {
  const [income, setIncome] = useState("0")

  const save = async () => {
    await database.write(async () => {
      allocationsCollection.create((newAllocation) => {
        newAllocation.income = Number.parseFloat(income)
      })
    })
    // Allocation.create(Number.parseFloat(income))
    setIncome("")
    router.push('allocations/home');
  }
  return (
    <View style={{}}>
      <Stack.Screen options={{ title: "New Allocations" }} />
      <View style={styles.inputRow}>
        <Text style={styles.label}>Income</Text>
        <TextInput
          placeholder='$123'
          style={styles.input}
          value={income}
          onChangeText={setIncome} />
      </View>


      {accounts.map((account) => {
        return (
          <View key={account.id} style={[styles.inputRow, {paddingHorizontal: 10}]}>
            <Text style={{flex: 1}}>{account.name}: {account.cap}%</Text>
            <Text>{(Number.parseFloat(income) * account.cap) / 100}  </Text>
          </View>
        )
      })}

      <TouchableOpacity onPress={save} style={styles.button} >
        <Text>Save</Text>
      </TouchableOpacity>
      {/* <Link href="/allocations/home">home</Link> */}
    </View>
  )
}

const enhance = withObservables([], () => ({
  accounts: accountsCollection.query()
}))

export default enhance(newAllocations)
const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10
  },
  button: {
    backgroundColor: "grey",
    marginHorizontal: 20,
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginTop: 20

  },
  label: {
    fontWeight: 'bold',
    width: 100,
    paddingLeft: 10
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 15,
    margin: 10,
    flex: 1

  }
})

