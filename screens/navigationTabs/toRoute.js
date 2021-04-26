import { StatusBar } from 'expo-status-bar';
import axios from "axios"
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {  Input,Button } from 'react-native-elements';
import { withNavigation } from "react-navigation"

class App extends React.Component{
    constructor(props){
            super(props);
            this.onClick = this.onClick.bind(this)


        }

    onClick(){
            axios.put(`http://localhost:3000/ways${this.props.currentWay.city}/${this.props.currentWay.id}`, {
                "amountPassengers": (this.props.currentWay.amountPassengers + 1),
                "numberOfWay": this.props.currentWay.numberOfWay,
                "typeOfTransport": this.props.currentWay.typeOfTransport,
                "city": this.props.currentWay.city
              })
        }

    render(){
        return(
        <View style={styles.container}>
            <Text onPress={() => {
                this.props.navigation.navigate("Route")
                console.log(this.props.way)
                localStorage.setItem("numberOfWay",this.props.way.numberOfWay)
                localStorage.setItem("city",this.props.way.city)
                localStorage.setItem("id",this.props.way.id)
                localStorage.setItem("numberOfWay",this.props.way.numberOfWay)
                localStorage.setItem("typeOfTransport",this.props.way.city)



            }}>{this.props.name}</Text>

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