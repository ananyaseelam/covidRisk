import React from 'react'
import {Button, StyleSheet, TextInput, View, Alert} from 'react-native'
import RiskInput from './RiskInput'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center'
  },
  input: {
    borderWidth: 5,
    borderColor: 'pink',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
})

export default class LocationForm extends React.Component {
  state = {
    location: '',
    isFormValid: false,
  }

  handleLocationChange = location => {
    this.validateForm()
    this.setState({location})
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state)
    Alert.alert('Location is ' + this.state.location)
  }

  validateForm = () => {
    if(this.state.location.length > 0){
      return this.setState({isFormValid:true})
    }
    else{
      return this.setState({isFormValid:false})
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
            style={styles.input}
            value={this.state.location}
            placeholder='Enter Location'
            onChangeText={this.handleLocationChange}
        />
        <Button title="Submit" onPress = {this.handleSubmit} disabled = {!this.state.isFormValid}/>
        
      </View>
    )
  }
}
