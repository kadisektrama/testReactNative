import {USERS_REQUEST,USERS_FAILED,USERS_SUCCESS,SET_CURRENT_USER} from "../reducers/usersReducer"
import {getUsersRoute} from "../routes/usersRoutes"

export function setCurrentUser(name){
    return async dispatch => {
            dispatch({
                type:USERS_REQUEST,
                payload:{
                    currentUser:name,
                }
            });
        }
}

export function getUsers(){
    console.warn("Begin")
    return async dispatch => {
        dispatch({
            type:USERS_REQUEST,
            payload:{
                users:null,
            }
        });

        try {
                    var users = null;
                    await fetch('http://localhost:3000/users', {
                          method: 'GET',
                          //Request Type
                        })
                          .then((response) => response.json())
                          //If response is in json then in success
                          .then((responseJson) => {
                            //Success
                            //alert(JSON.stringify(responseJson));
                            console.log(responseJson);
                            users = responseJson;
                            console.log(users)


                          })



                    dispatch({
                        type: USERS_SUCCESS,
                        payload: {
                            users:users,
                        }
                    });
                } catch(e) {
                    console.warn("3")
                    dispatch({
                        type: USERS_FAILED,
                        payload: {
                            users:[{id:0}],
                        }
                    });
                }

    }
}