import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AccountListItem from '../components/AccountListItem'
import AccountsList from '../components/AccountsList'

const accounts = () => {
  return (
    <View style={{gap: 5, padding: 5}}>
      <View>
        <Text>Name</Text>
        <Text>CAP</Text>
        <Text>TAP</Text>
      </View>
     <AccountsList />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10
  }
})
export default accounts