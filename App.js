import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

printHello = name => {Alert.alert('printed ' + name)}

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="Input" onPress = {printHello('ananya')}/>
      <Text>Risky Business</Text>
    </View>
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
