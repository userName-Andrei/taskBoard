import { IUser, UserAction, UserActionType, UserState } from "../../types/user";

const initialState: UserState = {
    user: null,
    loading: false,
    error: null
}

export const userReducer = (state: UserState = initialState, action: UserAction) => {
    switch (action.type) {
        case UserActionType.AUTH_ME:
            return {...state, user: action.payload}
        case UserActionType.AUTH_ME_ERROR:
            return {...state, error: action.payload, loading: false}

        case UserActionType.AUTH_LOGIN:
            return {...state, loading: true, error: null}
        case UserActionType.AUTH_LOGIN_SUCCESS:
            return {...state, user: action.payload, loading: false}
        case UserActionType.AUTH_LOGIN_ERROR:
            return {...state, error: action.payload, loading: false}

        case UserActionType.AUTH_LOGOUT:
            return {...state, user: null}
        case UserActionType.AUTH_LOGOUT_ERROR:
            return {...state, error: action.payload, loading: false}

        case UserActionType.AUTH_REGISTER:
            return {...state, loading: true, error: null}
        case UserActionType.AUTH_REGISTER_SUCCESS:
            return {...state, user: action.payload, loading: false}
        case UserActionType.AUTH_REGISTER_ERROR:
            return {...state, error: action.payload, loading: false}

        case UserActionType.SET_USER:
            return {...state, user: action.payload}
        default:
            return state
    }
}