import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, TextInput, Text, Button, Alert } from 'react-native';
//import all the components we are going to use.

export default class FourthPage extends Component {
  static navigationOptions = {
    //Setting the header of the screen
    title: 'About',
  };
  
  render(){
   
    return (
      <View style={styles.container}>
        <Text style ={styles.baseText}>
            About our App
        </Text>
      </View>


    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#DBDBD6',
  },
  baseText: {
    fontFamily: 'System'
  },


});