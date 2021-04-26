import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {  Input,Button } from 'react-native-elements';
import axios from "axios"

class App extends React.Component{
    constructor(props){
            super(props);
            this.state = {
                login:"",
                password:"",
                email:"",
                x:""
            }


        }

  onClickSignUp(){


//    let data = {
//
//        "name":this.state.login,
//        "password":this.state.password,
//        "email":this.state.email,
//        "id1":1,
//        "id2":"2"
//    }
//    let api_url = 'http://localhost:3000/users'
//    fetch(api_url, {
//            method: 'POST',
//            body: JSON.stringify(data)
//        }
//    )
//    .then((response) => response.json())
//    .then((responseJson) => { console.log('response:', responseJson); })
//    .catch((error) => { console.error(error); });
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    let item = {
        "login":this.state.login,
        "name":"",
        "surname":"",
        "password":this.state.password,
        "email":this.state.email,
        "balance":0,
        "role":"passenger",
        "id":getRandomInt(10000)
    }
    axios.post('http://localhost:3000/users',item)
  }
  render(){
  return (
    <View style={styles.container}>

        <Input
          placeholder='LOGIN'
          onChangeText={(value) => this.setState({ login: value })}
          id = 'login'
        />

        <Input
          placeholder='EMAIL'
          onChangeText={value => this.setState({ password: value })}
          id = 'password'
        />

        <Input
          placeholder='PASSWORD'
          onChangeText={value => this.setState({ password: value })}
          id = 'password'
        />

        <Input
          placeholder='PASSWORD AGAIN'
          onChangeText={value => this.setState({ password: value })}
          id = 'password'
        />

        <Button
          title="Sign In"
          onPress={() => this.onClickSignUp()}
        />

    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
