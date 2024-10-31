import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { Link, Stack } from 'expo-router'
import database, { allocationsCollection } from '../../../db'

const newAllocations = () => {
  const [income, setIncome] = useState("")

  const save = async () => {
    await database.write(async() => {
      allocationsCollection.create((newAllocation) => {
        newAllocation.income = Number.parseFloat(income)
      })
    })  
    setIncome("")
  }
  return (
    <View>
      <Stack.Screen options={{ title: "New Allocations" }} />
      <View style={styles.inputRow}>
        <Text style={styles.label}>Income</Text>
        <TextInput
          placeholder='$123'
          style={styles.input}
          value={income}
          onChangeText={setIncome} />
      </View>

      <Button title="save" onPress={save} />
      {/* <Link href="/allocations/home">home</Link> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10
  },
  label: {
    fontWeight: 'bold',
    width: 100
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    flex: 1

  }
})

export default newAllocations