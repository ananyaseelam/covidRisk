import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, TextInput, Text, ScrollView, Image, Linking} from 'react-native';
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
          {"\n"}
            <Text style={styles.titleText}>
            {"CovidRisk"}
            </Text>
            {"\n"}
            {"\n"}
          </Text>

          <Button
            title="Calculate Risk For Any Location"
            type = "outline"
            titleStyle={{ color: 'black', fontFamily: 'System'}}
            buttonStyle={styles.button}
          onPress={() =>
            navigate('SecondPage')
          }
          />
          <Text>
        {"\n"}
        </Text>
          <Button
            title="Learn More About Covid-19 Prevention"
            type = "outline"
            titleStyle={{ color: 'black', fontFamily: 'System'}}
            buttonStyle={styles.button}
            onPress={() => Linking.openURL('https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/index.html')}
          />
          <Text>
        {"\n"}
        </Text>
          <Button
            title="How We Calculate Risk"
            type = "outline"
            titleStyle={{ color: 'black', fontFamily: 'System'}}
            buttonStyle={styles.button}
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
      fontSize: 50,
      fontFamily:"System",
      color: "black",
      fontWeight: "bold"
    },
    button:{
      backgroundColor: 'white',
      borderColor: 'transparent',
      borderWidth: 0,
      borderRadius: 30,
      paddingVertical: 10,
      paddingHorizontal:20,
    },
    logo: {
      width: 150,
      height: 150,
    },
  });
