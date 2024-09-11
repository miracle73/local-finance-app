import { Tabs } from "expo-router";
import { View, Text } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

const _layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    href: null

                }}
            />
            <Tabs.Screen
                name="accounts"
                options={{
                    title: "Accounts",
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="account-balance-wallet" size={size} color={color} />
                    )

                }}
            />
            <Tabs.Screen
                name="allocations"
                options={{
                    title: "Allocations",
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="account-balance-wallet" size={size} color={color} />
                    )

                }}
            />
        </Tabs>
    )
}

export default _layout