import React from "react";
import {connect} from "react-redux";
import RoutesScreen from "../screens/RoutesScreen";
import {getGrodnoWays,getBrestWays,setCurrentWay} from "../actions/routesActions"

function RoutesScreenContainer (props) {
    return <RoutesScreen
        routes = {props.routes}
        getGrodnoWays = {props.getGrodnoWays}
        getBrestWays = {props.getBrestWays}
        setCurrentWay = {props.setCurrentWay}
    />
}

const mapStateToProps = store => {
    return {
        routes: store.routes,
    }
};

const mapFuncToProps = dispatch => {
    return {
        getGrodnoWays:() => dispatch(getGrodnoWays()),
        getBrestWays:() => dispatch(getBrestWays()),
        setCurrentWay:(way) => dispatch(setCurrentWay(way))

    }
};

export default connect(mapStateToProps, mapFuncToProps)(RoutesScreenContainer);
