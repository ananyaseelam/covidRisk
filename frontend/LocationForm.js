import React from 'react'
import {Button, StyleSheet, TextInput, View, Alert} from 'react-native'


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

export default class LocationForm extends React.Component {
  state = {
    location: '',
    time: '',
    isFormValid: false,
  }

  handleLocationChange = location => {
    this.validateForm()
    this.setState({location})
  }
  handleTimeChange = time => {
    this.validateForm()
    this.setState({time})
  }
  handleSubmit = () => {
    this.props.onSubmit(this.state)
    Alert.alert('Location is ' + this.state.location + '\nTime is ' + this.state.time)
  }
  validateForm = () => {
    if(this.state.location.length > 0){
      if (this.state.time.length > 0){
        return this.setState({isFormValid:true})
      }
      else {
        return this.setState({isFormValid:false})
      }
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
        <TextInput
            style={styles.input}
            value={this.state.time}
            placeholder='Enter time you plan to be there'
            onChangeText={this.handleTimeChange}
        />
        <Button title="Submit" onPress = {this.handleSubmit} disabled = {!this.state.isFormValid}/>
      </View>
    )
  }
}
