import { View, Text } from 'react-native'
import React from 'react'
import AccountListItem from './AccountListItem'
import { FlatList } from 'react-native'

const AccountsList = () => {
  return (
    <View>
        <FlatList 
         data={[1,2,3]}
         contentContainerStyle={{gap: 5}}
         renderItem={() =>     <AccountListItem />}
        />
 
    
    </View>
  )
}

export default AccountsList