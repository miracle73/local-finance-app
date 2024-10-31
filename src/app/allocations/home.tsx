import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, router, Stack } from 'expo-router'
import AllocationList from '../../components/AllocationList'
import { StatusBar } from 'expo-status-bar'


const home = () => {
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: "Allocations" }} />
     
            <TouchableOpacity onPress={() => router.push("allocations/new")}>
                    <Text style={styles.button}>New Allocation</Text>
            </TouchableOpacity>
            <AllocationList />
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
   
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    button: {
        backgroundColor: "green",
        color: "white",
        margin: 10,
        padding: 10,
        textAlign: "center",
        fontWeight: "bold",
        borderRadius: 5,
        overflow: "hidden"
    }
});

export default home