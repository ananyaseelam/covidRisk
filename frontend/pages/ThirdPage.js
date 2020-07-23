import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, TextInput, Text, Button, Alert } from 'react-native';
//import all the components we are going to use.
import MapView from 'react-native-maps';

export default class ThirdPage extends Component {
  static navigationOptions = {
    //Setting the header of the screen
    title: 'Third Page',
  };
  
  render(){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
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
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});