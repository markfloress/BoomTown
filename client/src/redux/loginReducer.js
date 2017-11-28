const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

export const login = (user) => ({
    type: LOGIN,
    payload: user
})

export const logout = () => ({
    type: LOGOUT,
})

const intitialState= {
    user:null
}

export default function(state = {}, action) {
    
    switch(action.type) {
        case LOGIN:
            return { ...state, user: action.payload };
        case LOGOUT:
            return { ...state, user:null }
        default:
            return state;
    }
}