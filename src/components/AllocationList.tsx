import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import AllocationListItem from './AllocationListItem'
import { withObservables } from '@nozbe/watermelondb/react'
import { allocationsCollection } from '../../db'
import Allocation from '../../model/Allocation'
import { Q } from '@nozbe/watermelondb'

const AllocationList = ({ allocations }: { allocations: Allocation[] }) => {
    return (
        <View style={{ flex: 1, overflow: "hidden" }} >

            <FlatList
                data={allocations}
                contentContainerStyle={{ gap: 10, padding: 10 }}
                renderItem={({ item }) => <AllocationListItem allocations={item} />}
                showsVerticalScrollIndicator={false}
            />

        </View>

    )
}

const enhance = withObservables([], () => ({
    allocations: allocationsCollection.query(Q.sortBy("created_at", Q.asc)),
}))
export default enhance(AllocationList)