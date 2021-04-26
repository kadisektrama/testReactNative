import React from "react";
import {connect} from "react-redux";
import LogScreen from "../screens/LogScreen";
import {getUsers,setCurrentUser} from "../actions/usersActions"
import { withNavigation } from "react-navigation"

function LogScreenContainer (props) {
    return <LogScreen
         users = {props.users}
         getUsers = {props.getUsers}
         setCurrentUser = {props.setCurrentUser}

     />
 }

 const mapStateToProps = store => {
     return {
         users: store.users,
     }
 };

 const mapFuncToProps = dispatch => {
     return {
         //getUsers: (currentUser) => dispatch(usersAction(currentUser)),
         getUsers:() => dispatch(getUsers()),
         setCurrentUser:(name) => dispatch(setCurrentUser(name))


     }
 };

 export default connect(mapStateToProps, mapFuncToProps)(withNavigation(LogScreenContainer));
