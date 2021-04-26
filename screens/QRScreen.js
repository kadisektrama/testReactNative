import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ToReg from "./navigationTabs/toReg"

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={

            dat:"sad"
        }
    }

    render(){

  return (
    <View style={styles.container}>
        <Text>QRjhh</Text>

        <Button
                    title="press"
                    color="red"
                    onPress={() => console.log(React.Component) }
                    />
        <ToReg/>


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


