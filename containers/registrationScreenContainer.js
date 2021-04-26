import React from "react";
import {connect} from "react-redux";
import RegistrationScreen from "../screens/RegistrationScreen";
//import {getUsers} from "../actions/mainPageAction"

function RegistrationScreenContainer (props) {
    return <RegistrationScreen
        users = {props.users}


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


    }
};

export default connect(mapStateToProps, mapFuncToProps)(RegistrationScreenContainer);
