// First screen which we will use to send the data
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Button, TextInput } from 'react-native';
import LocationForm from '../LocationForm'
//import all the components we are going to use.

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
    if (this.state.showForm===true) return <LocationForm onSubmit= {this.addLocation}/>
    return (
      <View style={styles.container}>
        <Text>Covid Risk</Text>
        <Button 
          title="Input" 
          onPress = {this.showForm}
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