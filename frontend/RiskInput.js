import React from 'react'
import {Button, StyleSheet, TextInput, View, Alert, Text} from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center'
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
})

export default class RiskInput extends React.Component {

  state = {
    factor1:1,
    factor2:3,
    factor3:4,
    risk:0,
  }

  //react class component lifecycle begins 
  //1. instance of a component created and stored in the DOM (document object model)
  constructor(props) { 
    super(props);
  }

  componentDidMount() {
    console.log('hello');
    this.setState({
      risk:(this.state.factor1*0.33 + this.state.factor2*0.33 + this.state.factor3*0.33)
    });
  }

  //2. Component is re-rendered 
  //onClick set the state
  componentDidUpdate() {

  }

  render() {
    return (
      <View>
          <Text>
            Risk: {this.state.risk}
          </Text>
      </View>
    )
  }
}
