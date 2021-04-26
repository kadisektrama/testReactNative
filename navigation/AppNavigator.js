import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack'
import React from 'react';

//screens
import LogScreen from '../screens/LogScreen'
import QRScreen from '../screens/QRScreen'
import RoutesScreen from '../screens/RoutesScreen'
import RegScreen from '../screens/RegistrationScreen'
import RouteScreen from '../screens/routeScreen'
import ProfileScreen from '../screens/ProfileScreen'

//containers
import LogScreenContainer from "../containers/logScreenContainer"
import QRScreenContainer from "../containers/QRScreenContainer"
import RegistrationScreenContainer from "../containers/registrationScreenContainer"
import RoutesScreenContainer from "../containers/routesScreenContainer"


let a = localStorage.getItem('logged');
let currentPage = '';
let profileInfo = '';
let titleInfo = '';
if(a == "true"){
    profileInfo = "Профиль";
    currentPage = ProfileScreen
    titleInfo = "Профиль"
}else{
    profileInfo = "Логирование"
    currentPage = LogScreenContainer
    titleInfo = "Логирование"
}



const _LogNavigator = createStackNavigator({


    Log:{
            screen:currentPage,
            navigationOptions:{
                title:titleInfo
            }
        },
    Reg:{
        screen:RegistrationScreenContainer,
        navigationOptions:{
            title:'Регистрация'
        }
    }
})

const _QRNavigator = createStackNavigator({
    QR:{
            screen:QRScreen,
            navigationOptions:{
                title:'QR-code'
            }
        }

})

const _RoutesNavigator = createStackNavigator({
    Routes:{
        screen:RoutesScreenContainer,
        navigationOptions:{
            title:'маршруты'
        }
    },
    Route:{
        screen:RouteScreen,
        navigationOptions:{
            title:'Маршрут'
        }
    }
})

const AppNavigator = createBottomTabNavigator({

    Routes_:{
        screen:_RoutesNavigator,
        navigationOptions:{
            title:'маршруты'
        }
    },
    QR_:{
            screen:_QRNavigator,
            navigationOptions:{
                title:'QR-code'
            }
        },
    Log_:{
        screen:_LogNavigator,
        navigationOptions:{
            title:profileInfo
        }
    }

},
    {
        initialRouteName:'Routes_'
})



export default createAppContainer(AppNavigator)