import React from "react";
import {connect} from "react-redux";
import QRScreen from "../screens/QRScreen";
//import {getUsers} from "../actions/mainPageAction"

function QRScreenContainer (props) {
    return <QRScreen
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

export default connect(mapStateToProps, mapFuncToProps)(QRScreenContainer);
