import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, TextInput, Text, Button, Alert } from 'react-native';
//import all the components we are going to use.
import MapView, {Marker} from 'react-native-maps';

export default class ThirdPage extends Component {
  static navigationOptions = {
    //Setting the header of the screen
    title: 'Map View',
  };
  
  render(){
    const { navigate } = this.props.navigation;
    const latitude =  this.props.navigation.getParam('latitude', 35.783877)
    const longitude =  this.props.navigation.getParam('longitude',  -78.602886)
    const risk = this.props.navigation.getParam('risk', 0.0)
    const location = this.props.navigation.getParam('location', '')
    const county = this.props.navigation.getParam('county', '')
    return (
      <View style={styles.container}>
        <MapView
        style={styles.map}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        >
          <Marker
            coordinate={{latitude: latitude,longitude: longitude}}
            title={'Risk: '+ risk.toString()}
            description={location + ', ' +county + ' County'}
          />
        </MapView>
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