import { AppDispatch } from ".."
import { IUser, IUserLogin, IUserRegistration, SetUser, UserActionType } from "../../types/user"
import AuthService from "../../api/AuthService"

export const registration = (userData: IUserRegistration) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch({type: UserActionType.AUTH_REGISTER})

            const response = await AuthService.userRegister(userData);

            const user: IUser = {
                id: response.uid,
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: response.email,
                token: await response.getIdToken()
            }

            await AuthService.setUserToBase(user);
            
            dispatch({type: UserActionType.AUTH_REGISTER_SUCCESS, payload: user})
        } catch (error) {
            dispatch({
                type: UserActionType.AUTH_REGISTER_ERROR,
                payload: error instanceof Error ? error.message : 'Registration request error'
            })
        }
    }
}

export const login = (userData: IUserLogin) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch({type: UserActionType.AUTH_LOGIN})

            const response = await AuthService.userLogin(userData);

            const user = await AuthService.fetchUserFromBase(response.uid);
            
            
            dispatch({type: UserActionType.AUTH_LOGIN_SUCCESS, payload: user as IUser})
        } catch (error) {
            dispatch({
                type: UserActionType.AUTH_LOGIN_ERROR,
                payload: error instanceof Error ? error.message : 'Registration request error'
            })
        }
    }
}