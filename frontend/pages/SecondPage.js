import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, TextInput, Text, Button, Alert, KeyboardAvoidingView} from 'react-native';
//import all the components we are going to use.
import Spinner from 'react-native-loading-spinner-overlay';
import { Input } from 'react-native-elements';
import GooglePlacesInput from '../Autocomplete'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
 
export default class SecondPage extends Component {
  static navigationOptions = {
    //Setting the header of the screen
    title: 'Second Page',
  };
  state = {
    risk: 0,
    location: '',
    county:'',
    state: '',
    day: '', 
    time: '',
    placeType:'',
    casesData: 0,
    countyPop: 0,
    timeSpent: 0, 
    isFormValid: false,
    showForm: true,
    isLoading: false,
    spinner: true,
    latitude:0.0,
    longitude:0.0,
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
        //mode: 'no-cors', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
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
      this.setState({timeSpent: json.average_time_spent})
      this.setState({latitude: json.latitude})
      this.setState({longitude: json.longitude})
      this.setState({county: json.county})
      //this.setState({state: json.state})
      //console.log('Risk AGAIN ', this.state.risk)
    })
    .catch((error) => console.error(error))
  };

  startLoading = () => {
    this.setState({isLoading:true})
    this.handleSubmit()
  }
  checkLoading = () => {
    if(this.state.risk>0){
      this.setState({isLoading:false})
    }
  }


  handleLocationChange = location => {
    //this.validateForm()
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
    this.setState({showForm:false})
    this.getRemoteData()
    //Alert.alert('Location is ' + this.state.location + '\nDay of the Week is ' + this.state.day + '\nTime is ' 
    //+ this.state.time+ '\nRisk is ' + this.state.risk)
    //onPress --> render progress bar 
  }
  validateForm = () => {
    if(this.state.location.length >= 0){
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

    if (this.state.showForm===false){
      if(this.state.risk>0){
        return (
          <View style={styles.container}>
            <Text>
              Risk: {this.state.risk}
              {"\n"}
              New Cases per Hundred Thousand: {this.state.casesData}
              {"\n"} 
              Place Type: {this.state.placeType}
              {"\n"}
              Average Time Spent at this Location: {this.state.timeSpent} minutes
            </Text>
            <Button 
            title="Map View"
            onPress={() =>
              this.props.navigation.navigate('ThirdPage', {latitude: this.state.latitude, longitude: this.state.longitude, risk: this.state.risk, location: this.state.location, county:this.state.county})
            }/>
          </View>
        )
      }
      else{
        return(
          <View style={styles.container}>
            <Spinner
              visible={this.state.spinner}
              textContent={'Loading...'}
              textStyle={styles.spinnerTextStyle}
            />
          </View>
      
        )
      }
    }
    else{
      console.log(this.state.isLoading)
      return (
        <KeyboardAvoidingView style={styles.container}>
            <GooglePlacesAutocomplete
              placeholder='Enter Location'
              listViewDisplayed='auto'
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                {this.handleLocationChange}
                console.log('here'+ this.state.location);
              }}
              query={{
                key: '',
                language: 'en',
              }}
              styles={{
                textInputContainer: {
                  backgroundColor: 'rgba(0,0,0,0)',
                  borderTopWidth: 0,
                  borderBottomWidth: 0,
                  width: '100%',
                },
                textInput: {
                  marginLeft: 0,
                  marginRight: 0,
                  height: 38,
                  color: '#FF6347',
                  fontSize: 16,
                },
                predefinedPlacesDescription: {
                  color: '#1faadb',
                },
              }}
            />


          <Input
              placeholder='BASIC INPUT'
              style={styles.input}
              value={this.state.location}
              placeholder='Enter Location'
              onChangeText={this.handleLocationChange}
          />
          <Input
              placeholder='BASIC INPUT'
              style={styles.input}
              value={this.state.day}
              placeholder='Day of the Week'
              onChangeText={this.handleDayChange}
          />
          <Input
              placeholder='BASIC INPUT'
              style={styles.input}
              value={this.state.time}
              placeholder='Enter time you plan to be there'
              onChangeText={this.handleTimeChange}
          />
          <Button title="Submit" onPress = {this.startLoading} disabled = {!this.state.isFormValid}/> 
        </KeyboardAvoidingView>
      )
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#FF6347',
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