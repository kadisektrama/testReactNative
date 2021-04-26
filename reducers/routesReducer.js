export const ROUTES_FAILED = "ROUTES_FAILED"
export const ROUTES_REQUEST = "ROUTES_REQUEST"
export const ROUTES_SUCCESS = "ROUTES_SUCCESS"
export const GET_BREST_WAYS = "GET_BREST_WAYS"
export const GET_GRODNO_WAYS = "GET_GRODNO_WAYS"
export const SET_CURRENT_WAY ="SET_CURRENT_WAY"

export const initialState = {
    routesBrest: [{id:1},{id:2}],
    routesGrodno: [{id:1},{id:2}],
    currentWay:null
};

export function routesReducer(state = initialState, action) {
    switch (action.type) {
        case ROUTES_FAILED:
            return {...state, ...action.payload };
        case ROUTES_SUCCESS:
            return {...state, ...action.payload };
        case GET_BREST_WAYS:
            return {...state, ...action.payload };
        case GET_GRODNO_WAYS:
            return {...state, ...action.payload };
        case SET_CURRENT_WAY:
            return {...state, ...action.payload };
        default:
            return state;
    }
}