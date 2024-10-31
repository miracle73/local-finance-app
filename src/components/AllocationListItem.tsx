import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Allocation from '../../model/Allocation'

const AllocationListItem = ({ allocations }: { allocations: Allocation }) => {
    return (
        <View>
            <View style={styles.header}>
            <Text>{allocations.created_at.toString()}</Text>
            <Text>{allocations.income}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        overflow: "hidden"
    },
    income: {
        fontSize: 24,
        fontWeight: "bold",
        color: "green"
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "gainsboro",
        padding: 10,
        borderRadius: 15
    }
})
export default AllocationListItem