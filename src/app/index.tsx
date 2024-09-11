import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link, Redirect } from 'expo-router';

export default function HomeScreen() {
  return (
    // <View style={styles.container}>
    //   <Text>I don come house</Text>
    //   <Link href="/accounts">Accounts</Link>
    //   <StatusBar style="auto" />
    // </View>
    <Redirect href="allocations" />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
