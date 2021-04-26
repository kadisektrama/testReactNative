import {combineReducers} from "redux";
import {routesReducer} from "./routesReducer"
import {usersReducer} from "./usersReducer"

export const rootReducer = combineReducers({
    routes:routesReducer,
    users:usersReducer
})

