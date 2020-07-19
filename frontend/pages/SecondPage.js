import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
//import all the components we are going to use.

export default class SecondPage extends Component {
  static navigationOptions = {
    //Setting the header of the screen
    title: 'Second Page',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      //View to hold our multiple components
      <View style={styles.container}>
        <Text>
          You are on SecondPage and the value passed from the first screen is
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextStyle: {
    fontSize: 23,
    textAlign: 'center',
    color: '#f00',
  },
});