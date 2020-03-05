export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const INTERACTWITHBACKEND = "INTERACTWITHBACKEND";


export const loginResult = () => {
    return {
        type: LOGIN
    }
}

export const interactWithBackend = () => {
    return {
        type: INTERACTWITHBACKEND
    }
}

export const loginAction = () => {
    return (dispatch) => {
        dispatch(interactWithBackend());
        /** ASYNC */
        setTimeout(() => {
            dispatch(loginResult());
        }, 2000);
    }
}

export const logoutResult = () => {
    return {
        type: LOGOUT
    }
}
export const logoutAction = () => {
    return (dispatch) => {
        dispatch(interactWithBackend());
        /** ASYNC */
        setTimeout(() => {
            dispatch(logoutResult()); 
        }, 2000);
    }
}