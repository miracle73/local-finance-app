import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import AccountListItem from './AccountListItem'
import { FlatList } from 'react-native'
import { accountsCollection} from '../../db'
import { Model } from '@nozbe/watermelondb'
import {withObservables} from '@nozbe/watermelondb/react'
import Account from '../../model/Account'


const AccountsList = ({accounts}: {accounts: Account[]}) => {
  // const [accounts, setAccounts] = useState<Account[]>([])
  // useEffect(() => {
  //   const fetchAccounts = async () => {
  //     const accounts = await accountsCollection.query().fetch()
  //     setAccounts(accounts)
  //   }
  //   fetchAccounts()
  // }, [])
  console.log(accounts, 4)
  return (
    <ScrollView   showsVerticalScrollIndicator={false}>
      {/* <FlatList
        data={accounts}
        contentContainerStyle={{ gap: 5 }}
        renderItem={(item) => <AccountListItem account={item} />}
      /> */}

      {accounts.map((account: any, index: any) => <View key={index} style={{gap: 5}}><AccountListItem account={account}/></View>)}


    </ScrollView>
  )
}

const enhance = withObservables([], () => ({
  accounts: accountsCollection.query()
}))

const EnhancedAccountList = enhance(AccountsList)
export default EnhancedAccountList