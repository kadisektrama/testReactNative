import {ROUTES_REQUEST,ROUTES_FAILED,GET_BREST_WAYS,GET_GRODNO_WAYS,SET_CURRENT_WAY} from "../reducers/routesReducer"
import React from 'react';

export const setCurrentWay = payload => {
    console.log("SET_CURRENT_WAY")
    return{
        type:SET_CURRENT_WAY,
        payload:{
            currentWay:payload
            }
    }
}

export function getGrodnoWays(){
    console.warn("GET_GRODNO_WAYS")
    return async dispatch => {
        dispatch({
            type:ROUTES_REQUEST,
            payload:{
                routesGrodno:null,
            }
        });

        try {
                    var grodnoWays = null

                    await fetch('http://localhost:3000/waysGrodno', {
                          method: 'GET',
                          //Request Type
                        })
                          .then((response) => response.json())
                          //If response is in json then in success
                          .then((responseJson) => {
                            //Success
                            //alert(JSON.stringify(responseJson));

                            grodnoWays = responseJson;
                            console.log("----------grodnoWays---------")
                            console.log(grodnoWays)
                          })



                    dispatch({
                        type: GET_GRODNO_WAYS,
                        payload: {
                            routesGrodno:grodnoWays,
                        }
                    });
                } catch(e) {
                    console.warn("3")
                    dispatch({
                        type: ROUTES_FAILED,
                        payload: {
                            routesGrodno:[{id:0}],
                        }
                    });
                }

    }
}


export function getGrodnoWays1(){
    console.warn("GET_GRODNO_WAYS")
    return async dispatch => {

        let grodnoWays = null
            await fetch('http://localhost:3000/waysGrodno', {
                  method: 'GET',
                  //Request Type
                })
                  .then((response) => response.json())
                  //If response is in json then in success
                  .then((responseJson) => {
                    //Success
                    //alert(JSON.stringify(responseJson));

                    grodnoWays = responseJson;

                  })

            console.log("========")
            console.log(grodnoWays)

        dispatch({
            type:GET_GRODNO_WAYS,
            payload:{
                routesGrodno:grodnoWays,
            }
        });


    }
}

export function getBrestWays(){
    console.warn("GET_BREST_WAYS")
    return async dispatch => {
        dispatch({
            type:ROUTES_REQUEST,
            payload:{
                routesBrest:null,
            }
        });

        try {
                    let brestWays = null

                    await fetch('http://localhost:3000/waysBrest', {
                          method: 'GET',
                          //Request Type
                        })
                          .then((response) => response.json())
                          //If response is in json then in success
                          .then((responseJson) => {
                            //Success
                            //alert(JSON.stringify(responseJson));

                            brestWays = responseJson;

                          })

                    console.log("-------brestWays----------")
                    console.log(brestWays)

                    dispatch({
                        type: GET_BREST_WAYS,
                        payload: {
                            routesBrest:brestWays,
                        }
                    });
                } catch(e) {
                    console.warn("3")
                    dispatch({
                        type: ROUTES_FAILED,
                        payload: {
                            routesBrest:[{id:0}],
                        }
                    });
                }

    }
}

export function increment(){
    return async dispatch => {
            dispatch({
                type:USERS_COUNT_INCREMENT,
                payload:{
                    count: 10,
                }
            });
    }
}
