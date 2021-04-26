import { StatusBar } from 'expo-status-bar';
import axios from "axios"
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import ToRoute from "./navigationTabs/toRoute"

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            grodnoWays:[{id:1},{id:2}],
            brestWays:[{id:1},{id:2}],
            dat:"sad",
            a:false
        }
        this.x = this.x.bind(this)

    }

    x() {
      this.setState({a:true})
      console.log("Text")
    }



    componentDidMount(){
        this.props.getGrodnoWays()
        this.props.getBrestWays();

        console.log("------------------")
        console.log(this.props.routes.routesGrodno)
        console.log(this.props.routes.routesBrest)
        setTimeout(this.x,10);
    }




    render(){


        return(
        <View style={styles.container}>

            <Text><b>Brest</b></Text>
            <Text>{console.log(this.state.brestWays)}</Text>
            {this.state.a == true ? this.props.routes.routesBrest.map((item) => {
                  let way = item;
                  return(
                    <Button
                        title=<ToRoute name={item.numberOfWay} way={item}/>
                        onPress={console.log("pidor")}

                    />
                  )
            })
            : ""}
            //////
            <Text>Grodno</Text>
                        <Text>{console.log(this.state.grodnoWays)}</Text>
                        {this.state.a == true ? this.props.routes.routesGrodno.map((item) => {
                              let way = item;
                              return(
                                <Button
                                    title=<ToRoute name={item.numberOfWay} way={item}/>
                                    onPress={console.log("pidor")}

                                />
                              )
                        })
                        : ""}

            <Button
                title="press"
                color="red"
                onPress={() => this.props.navigation.navigate("Routes") }
            />
            <Button
                title="press"
                color="blue"
                onPress={() => console.log(this.props.routes.routesBrest) }
            />

            <Button
                title="press"
                color="black"
                onPress={() => console.log(this.setState({a:true})) }
            />
        </View>
        )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  but:{
    width:'10 px',
    height:'10 px'
  }
});

export default App;