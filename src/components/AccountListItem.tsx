import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Account from '../../model/Account'
import { withObservables } from '@nozbe/watermelondb/react'
import { AntDesign } from '@expo/vector-icons'
import database from '../../db'

interface AccountListItem {
    account: Account
}

const AccountListItem = ({ account }: AccountListItem) => {
    if (!account) return null; // Fallback if account is undefined
    const onDelete = async () => {
        await database.write(async () => {
            await account.markAsDeleted();
        })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{account.name || "N/A"}</Text>
            <Text style={styles.percentage}>{account.cap != null ? account.cap : "No CAP"}%</Text>
            <Text style={styles.percentage}>{account.tap != null ? account.tap : "No TAP"}%</Text>
            {/* <TouchableOpacity  > */}
            <AntDesign name="delete" size={18} color="gray" onPress={onDelete} />
            {/* </TouchableOpacity> */}
        </View>
    )
}
const enhance = withObservables(['account'], ({ account }) => ({
    account: account.observe()
}))

const EnhancedAccountListItem = enhance(AccountListItem)
export default EnhancedAccountListItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 5,
        flex: 1
    },
    name: {
        fontWeight: "bold",
        fontSize: 16,
        flex: 1
    },
    percentage: {
        flex: 1
    }
})
