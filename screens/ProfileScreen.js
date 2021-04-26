import { StatusBar } from 'expo-status-bar';
import axios from "axios"
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {  Input,Button } from 'react-native-elements';
import { withNavigation } from "react-navigation"

class App extends React.Component{
    constructor(props){
            super(props);

        }


    render(){
        return(
        <View style={styles.container}>
            <Text onPress={() => this.props.navigation.navigate("Reg") }>SignUp</Text>
            <Text>dsfdsf</Text>
            <Button
                title="SignOut"
                color="red"
                onPress={() => {
                    localStorage.setItem("logged","false")
                    window.location.reload()
                } }
            />


        </View>
        )
    }
}


const styles = StyleSheet.create({
  container: {
    margin:10
  },
});

export default withNavigation(App);