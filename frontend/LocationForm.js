import React from 'react'
import {Button, StyleSheet, TextInput, View, Alert} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';


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
    risk: '',
    location: '',
    day: '', 
    time: '',
    isFormValid: false,
  }

  getRemoteData = async () => {
    const obj = {'location': this.state.location, 'day': this.state.day, 'time': this.state.time};
    const blob = new Blob([JSON.stringify(obj, null, 2)], {type : 'application/json'});
    let postData = {
        method: 'POST',
        method: 'no-cors',
        body: blob
    }
    //fetch('http://127.0.0.1:5000/getJson/', postData)
    try {
      let response = await fetch('http://localhost:5000/getJson', postData)
      let json = await response.json();
      console.log(json)
      //this.setState({risk: json["risk"]});
      console.log('RISK: ' + json.risk)
      return json.risk
    } catch (error) {
      console.error(error);
    }
  };

  
  constructor(props) {
    super(props);
 }

  handleLocationChange = location => {
    this.validateForm()
    this.setState({location})
  }
  handleDayChange = day => {
    this.validateForm()
    this.setState({day})
  }
  handleTimeChange = time => {
    this.validateForm()
    this.setState({time})
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state)
    console.log(this.getRemoteData())
    //this.getRemoteData().then(result => console.log({result}))
    console.log('this.state.risk: ' + this.state.risk)
    Alert.alert('Location is ' + this.state.location + '\nDay of the Week is ' + this.state.day + '\nTime is ' 
    + this.state.time+ '\nRisk is ' + this.state.risk)
  }

  validateForm = () => {
    if(this.state.location.length > 0){
      if(this.state.day.length > 0){
        if(this.state.time.length > 0){
          return this.setState({isFormValid:true})
        }
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
            value={this.state.day}
            placeholder='Day of the Week'
            onChangeText={this.handleDayChange}
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