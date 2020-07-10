import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import {Constants} from 'expo';
import LocationForm from './LocationForm'
import RiskInput from './RiskInput'
export default class App extends React.Component {
  state={
    showForm:false
  }
  showForm = () => {
    this.setState({showForm: true})
  }
  addLocation = newLocation => {
    this.setState({showForm: false})
  }
  getRiskFromApi = () => {
    return fetch('http://127.0.0.1:5000/')
      .then((response) => response.json())
      .then((json) => {
        return json.risk;
      })
      .catch((error) => {
        console.error(error);
      });
  };
  render(){
    if (this.state.showForm===true) return <LocationForm onSubmit= {this.addLocation}/>
    return (
      <View style={styles.container}>
        <Text>Covid Risk</Text>
        <Text> Risk: {this.getRiskFromApi}</Text>
        <Button 
          title="Input" 
          onPress = {this.showForm}
        />
        <RiskInput/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

