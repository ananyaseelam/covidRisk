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

export default class ApiPractice extends React.Component {
  state = {
    repos: [],
    isLoading: false,
  }
  constructor(props) { 
    super(props);
  }

  componentDidMount(){
    this.fetchData()
  }
  /* Fetch GitHub Repos */
    fetchData = () => {
    //show progress bar
        this.setState({ isLoading: true });
        //fetch repos
        fetch(`https://api.github.com/users/hiteshsahu/repos`)
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data)) {
            console.log(JSON.stringify(data));
            this.setState({repos: data ,
                isLoading: false});
            } else {
            this.setState({ repos: [],
                isLoading: false  
            });
            }
        });
    }

  render() {
    return (
      <View>
          <Text>
            REPOS: {this.state.repos}
          </Text>
      </View>
    )
  }
}

  
  