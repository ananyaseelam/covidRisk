import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, TextInput, Text, ScrollView, Image } from 'react-native';
//import all the components we are going to use.
import { Button, LinearGradient, linearGradientProps, Header, Icon } from 'react-native-elements';
import LocationForm from '../LocationForm';

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
    title: 'Covid Risk Apps',
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
          <Text>
            {"\n"}
          </Text>
          <Text style={styles.titleText}>
            {"CovidRisk"}
          </Text>
        <View style={styles.bottom}>
        <Button
          raised
          title="Calculate Your Risk"
          type = "outline"
          titleStyle={{ color: 'black', fontFamily: 'System', fontWeight: "bold"}}
          buttonStyle={{
            backgroundColor: 'white',
            borderColor: '#45B5E9',
            borderWidth:5,
            borderRadius: 30,
            paddingVertical: 7,
            paddingHorizontal:40
          }}
        //Button Title
          onPress={() =>
          navigate('SecondPage')
        }/>
        </View>
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
    backgroundColor: "#A5DEF9"
    
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
  logo: {
    width: 225,
    height: 225,
    marginTop:75

    
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10
  }
});