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
            <Text style={{fontSize:25, textAlign: "center"}}>
              FOUR{" "}
            </Text>
            main factors are used to calculate the risk at any location: 
            {"\n"}
            {"\n"}
            {"\t"}1) The number of new COVID-19 cases per hundred thousand per day in the county of the intended destination.
            {"\n"}
            {"\t"}- This information is accessed through the New York Times COVID-19 Database.
            {"\n"}
            {"\n"}
            {"\t"}2) The busyness of the location at the day and time the user selects.
            {"\n"}
            {"\t"}- This information is determined by the Google Maps "Popular Times" data.
            {"\n"}
            {"\n"}
            {"\t"}3) The average time spent at the location based on the place type property from Google Places.
            {"\n"}
            {"\n"}
            {"\t"}4) The average risk based on the location type calculated using risk scales from Texas Medical Association, Yahoo Finance, and Nebraska Medicine shown below.
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
    fontFamily: 'Avenir', 
    fontSize: 18,
  },
  TextStyle: {
    fontSize: 23,
    textAlign: 'left',
    color: 'black',
    fontFamily: 'Avenir',
  },
  HeaderText:{
    fontSize: 22,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Avenir',
    fontWeight: "bold"
  },
  riskText:{
    fontSize: 23,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Avenir',

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