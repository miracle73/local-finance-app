import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import AccountListItem from '../components/AccountListItem'
import AccountsList from '../components/AccountsList'
import { Entypo } from '@expo/vector-icons'
import database from '../../db'
import Account from '../../model/Account'

const accounts = () => {
  const [name, setName] = useState('')
  const [cap, setCap] = useState('')
  const [tap, setTap] = useState('')

  const createAccount = () => {
    console.log( 'create account that: ', name, cap, tap)
  }
  const onRead = async () => {
    const accountsCollection = database.get("accounts")
    // await database.write(async() => {
    //   await accountsCollection.create((account) => {
    //     const acc = account as Account;  // Cast account to the Account model
    //     acc.name = "Test",
    //     acc.cap = 40,
    //     acc.tap = 50
    //   })
    // })
    // console.log("done")
    const accounts = await accountsCollection.query().fetch();
    console.log(accounts)
  
  }
  return (
    <View style={{gap: 5, padding: 5}}>
      <View>
        <Text>Name</Text>
        <Text>CAP</Text>
        <Text>TAP</Text>
      </View>
     <AccountsList />
     <View style={styles.inputRow}>
      <TextInput value={name} onChangeText={(text) => setName(text)} placeholder='Name' style={styles.input}/>
      <TextInput value={cap} onChangeText={(text) => setCap(text)} placeholder='CAP %' style={styles.input}/>
      <TextInput value={tap} onChangeText={(text) => setTap(text)} placeholder='TAP %' style={styles.input}/>
      <Entypo name="check" size={20} color="green" />
     </View>
     <Button title="Add Account" onPress={createAccount}/>
     <Button title="Read" onPress={onRead}/>
    </View>
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