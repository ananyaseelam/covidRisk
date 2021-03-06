import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import {Constants} from 'expo';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Home from './pages/Home';
import SecondPage from './pages/SecondPage';
import FourthPage from './pages/FourthPage';

//import all the screens we are going to switch 
const App = createStackNavigator({
  //Constant which holds all the screens like index of any book 
    Home: { screen: Home }, 
    //First entry by default be our first screen 
    //if we do not define initialRouteName
    SecondPage: { screen: SecondPage }, 

    FourthPage: {screen: FourthPage},
  },
  
  {
  
    initialRouteName: 'Home',
  }
);
export default createAppContainer(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


