import { StatusBar } from 'expo-status-bar';
import axios from "axios"
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {  Input,Button } from 'react-native-elements';
import ToReg from "./navigationTabs/toReg"

class App extends React.Component{
    constructor(props){
            super(props);
            this.state={
                users:null,
                dat:"sad",
                login:'',
                password:''
            }
            this.onClickSignIn = this.onClickSignIn.bind(this);

        }

    componentDidMount(){
        //this.getApiData();
        this.props.getUsers()
        console.log(this.props.users.users)

    }

    onClickSignIn(){
        console.log(this.props.users.users)
                console.log("--------------")
              const users = this.props.users.users
              console.log(users)


              console.log(this.state.login,this.state.password)
               let name = users.find(item => item.login === this.state.login &&
                  item.password === this.state.password)
            console.log(name)
            if(name){

                this.props.setCurrentUser(name)
                localStorage.setItem('logged', "true")
                console.log(localStorage.getItem('logged'))
                window.location.reload();
                //props.setRole(name)
                //props.logged("")
            }else{
                console.log("FALSE")
                alert("incorrect")
            }

    }

    render(){
        return(
        <View style={styles.container}>

            <Input
              placeholder='LOGIN'
              onChangeText={(value) => this.setState({ login: value })}
              id = 'login'
            />
            <Input
              placeholder='PASSWORD'
              onChangeText={value => this.setState({ password: value })}
              id = 'password'
            />
            <Button
              title="Sign In"
              onPress={this.onClickSignIn}
            />
            <ToReg/>

        </View>
        )
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