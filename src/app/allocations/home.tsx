import { View, Text } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

const home = () => {
    return (
        <View>
            <Stack.Screen options={{ title: "Home Allocations" }} />
            <Text>Home to Allocations</Text>
            <Link href="/allocations/new">new</Link>
        </View>
    )
}

export default home