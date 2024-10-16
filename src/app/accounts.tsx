import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import AccountListItem from '../components/AccountListItem'
import EnhancedAccountList from '../components/AccountsList'
import { Entypo } from '@expo/vector-icons'
import database, { accountsCollection } from '../../db'
import Account from '../../model/Account'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const accounts = () => {
  const [name, setName] = useState('')
  const [cap, setCap] = useState('')
  const [tap, setTap] = useState('')

  const createAccount = async () => {
    console.log('create account that: ', name, cap, tap)
    await database.write(async () => {
      await accountsCollection.create((account) => {
        const acc = account as Account;  // Cast account to the Account model
        acc.name = name,
          acc.cap = Number.parseFloat(cap),
          acc.tap = Number.parseFloat(tap)
      })
    })
    setName("")
    setTap("")
    setCap("")
  }
  const onRead = async () => {
    const accounts = await accountsCollection.query().fetch();
    console.log(accounts)

  }
  const onTest = async () => {
    await database.write(async() => {
      const accounts = await accountsCollection.query().fetch();
      const account = accounts[0]
      account.update(updatedAccount => {
        updatedAccount.name = "2"
      })
    })
  }
  return (

    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1, gap: 5, padding: 5 }}
      keyboardShouldPersistTaps='handled'
      showsVerticalScrollIndicator={false}
    >
      <View>
        <Text>Name</Text>
        <Text>CAP</Text>
        <Text>TAP</Text>
      </View>
      <EnhancedAccountList />
      <View style={styles.inputRow}>
        <TextInput value={name} onChangeText={(text) => setName(text)} placeholder='Name' style={styles.input} />
        <TextInput value={cap} onChangeText={(text) => setCap(text)} placeholder='CAP %' style={styles.input} />
        <TextInput value={tap} onChangeText={(text) => setTap(text)} placeholder='TAP %' style={styles.input} />
        <Entypo name="check" size={20} color="green" />
      </View>
      <Button title="Add Account" onPress={createAccount} />
      <Button title="Read" onPress={onRead} />
      <Button title="Test Update" onPress={onTest} />
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10
  },
  inputRow: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10
  },
  input: {

  }
})
export default accounts