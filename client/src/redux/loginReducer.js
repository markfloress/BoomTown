const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

export const login = user => ({
    type: LOGIN,
    payload: user
})

export const logout = () => ({
    type: LOGOUT,
})

export default function(state = {}, action) {
    
    switch(action.type) {
        case LOGIN:
            return { ...state, user: action.payload };
        case LOGOUT:
            return { ...state }
        default:
            return state;
    }
}