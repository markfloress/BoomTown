const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

export const login = (user, auth) => ({
    type: LOGIN,
    payload: user, auth
})

export const logout = () => ({
    type: LOGOUT,
})

const intitialState= {
    user:null,
    auth:null
}

export default function(state = {}, action) {
    
    switch(action.type) {
        case LOGIN:
            return { ...state, user: action.payload, auth: action.payload };
        case LOGOUT:
            return { ...state, user:null, auth:false }
        default:
            return state;
    }
}