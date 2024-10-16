import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Account from '../../model/Account'

interface AccountListItem {
    account: Account
}

const AccountListItem = ({account}: AccountListItem) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{account.name || "N/A"}</Text>
            <Text style={styles.percentage}>{account.cap}</Text>
            <Text style={styles.percentage}>{account.tap}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 5,
    },
    name: {
      fontWeight: "bold",
      fontSize: 16
    },
    percentage: {

    }
})
export default AccountListItem