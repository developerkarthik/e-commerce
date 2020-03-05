import * as actions from './actions';

const initialState = {
    isAuthenticate: false,
    loader: false
}
const reducer = (state = initialState, action) => {
    if(action.type === actions.LOGIN){
        console.log(state);
        return state = {
            ...state,
            isAuthenticate: true,
            loader: false
        }
    }
    if(action.type === actions.LOGOUT){
        return state = {
            ...state,
            isAuthenticate: false,
            loader: false
        }
    }
    if(action.type === actions.INTERACTWITHBACKEND){
        console.log(state);
        return state = {
              ...state,
              loader: true  
        }
    }
    return state;
}

export default reducer;