export const USERS_FAILED = "USERS_FAILED"
export const USERS_SUCCESS = "USERS_SUCCESS"
export const USERS_REQUEST = "USERS_REQUEST"
export const SET_CURRENT_USER = "SET_CURRENT_USER"


export const initialState = {
    users: [],
    count:2,
    currentUser:null
};

export function usersReducer(state = initialState, action) {
    switch (action.type) {
        case USERS_REQUEST:
            return {...state, ...action.payload };
        case USERS_FAILED:
            return {...state, ...action.payload };
        case USERS_SUCCESS:
            return {...state, ...action.payload };
        case SET_CURRENT_USER:
            return {...state, ...action.payload };

        default:
            return state;
    }
}