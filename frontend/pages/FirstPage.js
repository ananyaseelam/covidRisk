import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, TextInput, Text, ScrollView, Image } from 'react-native';
//import all the components we are going to use.
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Button, LinearGradient, linearGradientProps, Header, Icon } from 'react-native-elements';


export default class FirstPage extends Component {
  constructor(props) {
        //constructor to set default state
    super(props);
    this.state = {
      showForm: false,
    };
  }
  static navigationOptions = {
    //Setting the header of the screen
    title: 'Covid Risk App',
  };
  showForm = () => {
    this.setState({showForm: true})
  }
  addLocation = newLocation => {
    this.setState({showForm: false})
  }
    
  render(){
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
          <Image 
          source={require('./cvirusimage.png')} 
          style={styles.logo}
          />
          <Text style={styles.baseText}>
            <Text style={styles.titleText}>
            {"\n"}
            {"\n"}
              Welcome to the Covid Risk App! 
              {"\n"}
            </Text>
          </Text>

          <Button
            title="Calculate Your Risk Here"
            type = "outline"
            titleStyle={{ color: 'black', fontFamily: 'System'}}
            buttonStyle={{
              backgroundColor: 'white',
              borderColor: 'transparent',
              borderWidth: 0,
              borderRadius: 30,
              paddingVertical: 10,
            }}

              
          
          //Button Title
          onPress={() =>
            navigate('SecondPage')
          }
          //single page applications
          //On click of the button we will send
          //the data as a Json from here to the Second Screen using navigation prop
        />
        <Text>
        {"\n"}
        </Text>
        </View>
  
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      //justifyContent: 'center',
      padding: 30,
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      marginBottom: 10,
      backgroundColor: '#DBDBD6',
    },
    baseText: {
      fontFamily: 'System'
    },
    titleText: {
      fontSize: 20,
      //fontWeight: "bold"
    },
    logo: {
      width: 100,
      height: 100,
    },
  });
