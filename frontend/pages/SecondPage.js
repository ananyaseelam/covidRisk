import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, TextInput, Text, Button, Alert } from 'react-native';
//import all the components we are going to use.

export default class SecondPage extends Component {
  static navigationOptions = {
    //Setting the header of the screen
    title: 'Second Page',
  };
  state = {
    risk: 0,
    location: '',
    day: '', 
    time: '',
    placeType:'',
    casesData: '',
    countyPop: 0,
    isFormValid: false,
    showForm: true,
    isLoading: false,
  }

  constructor(props) {
    super(props);
    //this.state = {risk: 0, location: '', day: '', time: '', isFormValid: false, isLoading: true};
 }
 
  getRemoteData = () => {
    const obj = {'location': this.state.location, 'day': this.state.day, 'time': this.state.time};
    const blob = new Blob([JSON.stringify(obj, null, 2)], {type : 'application/json'});
    let postData = {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
            'Accept': 'application/json',
        },
        body: blob
    }
    fetch('http://127.0.0.1:5000/getJson/', postData)
    .then((response) => response.json())
    .then((json) => {
      //console.log('Risk: ', json)
      this.setState({risk: json.risk});
      this.setState({placeType: json.placeType})
      this.setState({casesData:json.new_cases})
      this.setState({countyPop: json.population})
      //console.log('Risk AGAIN ', this.state.risk)
    })
    .catch((error) => console.error(error))
    

    //add wait thing 
  };


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
    //this.props.onSubmit(this.statee
    this.state.showForm = false
    this.getRemoteData()
    //Alert.alert('Location is ' + this.state.location + '\nDay of the Week is ' + this.state.day + '\nTime is ' 
    //+ this.state.time+ '\nRisk is ' + this.state.risk)
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
    const { navigate } = this.props.navigation;

    if (this.state.showForm===false) 
      return (
        <View style={styles.container}>
          <Text>
            Risk: {this.state.risk}
            {"\n"}
            Place Type: {this.state.placeType}
            {"\n"}
            New Cases per Hundred Thousand: {this.state.casesData}
            {"\n"} 
          </Text>
        </View>
      )
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextStyle: {
    fontSize: 23,
    textAlign: 'center',
    color: '#f00',
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
});