import { View, Text } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

const newAllocations = () => {
  return (
    <View>
      <Stack.Screen options={{title: "New Allocations"}} />
      <Text>  New Allocations</Text>
      <Link href="/allocations/home">home</Link>
    </View>
  )
}

export default newAllocations