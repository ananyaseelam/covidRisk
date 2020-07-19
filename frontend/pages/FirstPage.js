import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';
//import all the components we are going to use.
import LocationForm from '../LocationForm';

export default class FirstPage extends Component {
  constructor(props) {
        //constructor to set default state
    super(props);
    this.state = {
      showForm: false,
    };
  }
  static navigationOptions = {
    //Setting the header of the screen
    title: 'First Page',
  };
  showForm = () => {
    this.setState({showForm: true})
  }
  addLocation = newLocation => {
    this.setState({showForm: false})
  }
    
  render(){
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
          <Text>Covid Risk</Text>
          <Button 
            title="Input" 
            onPress = {this.showForm}
          />
          <Button
          title="Calculate Your Risk Here"
          //Button Title
          onPress={() =>
            navigate('SecondPage')
          }
          //On click of the button we will send
          //the data as a Json from here to the Second Screen using navigation prop
        />
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
  });