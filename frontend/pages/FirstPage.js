<<<<<<< HEAD
// First screen which we will use to send the data
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Button, TextInput } from 'react-native';
import LocationForm from '../LocationForm'
//import all the components we are going to use.

export default class FirstPage extends Component {
  constructor(props) {
    //constructor to set default state
=======
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';
//import all the components we are going to use.
import LocationForm from '../LocationForm';

export default class FirstPage extends Component {
  constructor(props) {
        //constructor to set default state
>>>>>>> master
    super(props);
    this.state = {
      showForm: false,
    };
  }
  static navigationOptions = {
    //Setting the header of the screen
<<<<<<< HEAD
    title: 'First Page',
  };

=======
    title: 'Covid Risk App',
  };
>>>>>>> master
  showForm = () => {
    this.setState({showForm: true})
  }
  addLocation = newLocation => {
    this.setState({showForm: false})
  }
<<<<<<< HEAD

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
=======
    
  render(){
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
          <Text>
            Welcome to the Covid Risk App! 
          </Text>
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
>>>>>>> master
