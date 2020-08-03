import React, { Component } from 'react';
import Slider from '@react-native-community/slider'
import { StyleSheet, View, TextInput, Text, ScrollView, Image } from 'react-native';
 


export default class ColorOutput extends Component {
    constructor(props) {
          //constructor to set default state
      super(props);
      this.state = {
        value: 50,
      };
    }

 
  render() {
    return (
      <View>
        <Slider
          disabled
          style={{width: 200, height: 40}}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          minimumValue={0}
          maximumValue={100}
          value={this.state.value}
          onValueChange={(value) => this.setState({value})} />
        <Text>Value: {this.state.value}</Text>
      </View>
    );
  }
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
 