import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, TextInput, Text, Button, Alert, Image, ScrollView } from 'react-native';
//import all the components we are going to use.

export default class FourthPage extends Component {
  static navigationOptions = {
    //Setting the header of the screen
    title: 'About',
  };
  
  render(){
   
    return (
      <ScrollView style={styles.container}>
          <Text style = {styles.HeaderText}>
            How Do We Calculate Risk?
            {"\n"}
          </Text>
        <Text style ={styles.baseText}>
            Up to three main factors are used to calculate risk at any location: 
            {"\n"}
            {"\n"}
            {"\t"}- Number of covid-19 cases per hundred thousand in the county of the location.
            {"\n"}
            {"\n"}
            {"\t"}- How busy the location is at the time and day selected.
            {"\n"}
            {"\n"}
            {"\t"}- The average risk based on the location type calculated using risk scales from Texas Medical Association, Yahoo Finance, Nebraska Medicine shown below.
            {"\n"}
        </Text>
        <Image 
          source={require('./texasScale.jpg')} 
          style={styles.image}
          />
          <Text >
            {"\n"}
          </Text>
          <Image 
          source={require('./yahooScale.png')} 
          style={styles.image}
          />
          <Text >
            {"\n"}
          </Text>
        <Image 
          source={require('./nebraskaScale.jpg')} 
          style={styles.image}
          />
          <Text >
            {"\n"}
          </Text>
          <Text >
            {"\n"}
          </Text>
      </ScrollView>


    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    padding: 16,
    //marginBottom: 0,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#DBDBD6',
  },
  baseText: {
    fontFamily: 'System', 
    fontSize: 18,
  },
  TextStyle: {
    fontSize: 23,
    textAlign: 'left',
    color: 'black',
    fontFamily: 'System',
  },
  HeaderText:{
    fontSize: 22,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'System',
    fontWeight: "bold"
  },
  riskText:{
    fontSize: 23,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'System',

  },
  textBlock: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        position: 'absolute',
        left: 10
    },
    image: {
        width: 345,
        height: 345,
      },


});