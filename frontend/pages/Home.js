import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, TextInput, Text, ScrollView, Image, Linking} from 'react-native';
//import all the components we are going to use.
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Button, LinearGradient, linearGradientProps, Header, Icon } from 'react-native-elements';


export default class Home extends Component {
  constructor(props) {
        //constructor to set default state
    super(props);
    this.state = {
      showForm: false,
    };
  }
  static navigationOptions = {
    //Setting the header of the screen
    headerShown:false
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
          source={require('./transparent.png')} 
          style={styles.logo}
          />
          <Text style={styles.baseText}>
          {"\n"}
            <Text style={styles.titleText}>
            {"CovidRisk"}
            </Text>
            {"\n"}
            {"\n"}
            {"\n"}
          </Text>

          <Button
            title="Calculate Risk For A Location"
            type = "outline"
            titleStyle={{ color: 'black', fontFamily: 'Avenir', fontWeight: 'bold'}}
            buttonStyle={styles.button1}
            raised
          onPress={() =>
            navigate('SecondPage')
          }
          />
          <Text>
        {"\n"}
        </Text>
          <Button
            title="More about Covid Prevention"
            type = "outline"
            titleStyle={{ color: 'black', fontFamily: 'Avenir', fontWeight: 'bold'}}
            buttonStyle={styles.button2}
            raised
            onPress={() => Linking.openURL('https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/index.html')}
          />
          <Text>
        {"\n"}
        </Text>
          <Button
            title="How We Calculate Risk"
            type = "outline"
            titleStyle={{ color: 'black', fontFamily: 'Avenir', fontWeight: 'bold'}}
            buttonStyle={styles.button3}
            raised
            onPress={() => navigate('FourthPage')}
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
      backgroundColor:'#E6F0FF'
      
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      marginBottom: 10,
      backgroundColor: '#DBDBD6',
    },
    baseText: {
      fontFamily: 'Avenir'
    },
    titleText: {
      fontSize: 50,
      fontFamily:"Avenir-Heavy",
      color: "black",
      fontWeight: "bold",
    },
    button1:{
      backgroundColor: 'white',
      borderColor: '#46b4ff',
      borderWidth: 3,
      borderRadius: 30,
      paddingVertical: 0,
      paddingHorizontal:75,
     
    },
    button2:{
      backgroundColor: 'white',
      borderColor: '#46b4ff',
      borderWidth: 3,
      borderRadius: 30,
      paddingVertical: 15,
      paddingHorizontal:20,
    },
    button3:{
      backgroundColor: 'white',
      borderColor: '#46b4ff',
      borderWidth: 3,
      borderRadius: 30,
      paddingVertical: 15,
      paddingHorizontal:45,

    },
    logo: {
    
      width: 150,
      height: 150,
    },
  });
