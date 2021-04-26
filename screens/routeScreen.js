import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import axios from "axios"

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={

            dat:"sad"
        }
    }

    onClick(){
            console.log("Вызывае метод!")
            console.log(localStorage.getItem("city"))
            console.log(localStorage.getItem("id"))



            axios.put(`http://localhost:3000/ways${localStorage.getItem("city")}/${localStorage.getItem("id")}`, {
                "amountPassengers": localStorage.getItem("amountPassengers") + 1,
                "numberOfWay": localStorage.getItem("numberOfWay"),
                "typeOfTransport": localStorage.getItem("typeOfTransport"),
                "city": localStorage.getItem("city")
              })
            localStorage.setItem("amountPassengers",localStorage.getItem("amountPassengers")+1)
        }

    render(){

  return (
    <View style={styles.container}>
        <Text>Город:{localStorage.getItem("city")}</Text>
        <Text>Номер автобуса:{localStorage.getItem("numberOfWay")}</Text>

        <Button
                    title="Заказать"
                    color="red"
                    onPress={() => this.onClick() }
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


