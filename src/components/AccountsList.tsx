import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import AccountListItem from './AccountListItem'
import { FlatList } from 'react-native'
import { accountsCollection} from '../../db'
import { Model } from '@nozbe/watermelondb'

const AccountsList = () => {
  const [accounts, setAccounts] = useState<Model[]>([])
  useEffect(() => {
    const fetchAccounts = async () => {
      const accounts = await accountsCollection.query().fetch()
      setAccounts(accounts)
    }
    fetchAccounts()
  }, [])
  console.log(accounts, 4)
  return (
    <View>
      <FlatList
        data={accounts}
        contentContainerStyle={{ gap: 5 }}
        renderItem={() => <AccountListItem />}
      />


    </View>
  )
}

export default AccountsList