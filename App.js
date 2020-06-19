import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import {Constants} from 'expo';
import LocationForm from './LocationForm'

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
