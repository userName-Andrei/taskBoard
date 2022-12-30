import { createUserWithEmailAndPassword } from "firebase/auth"
import { AppDispatch } from ".."
import { IUser, IUserRegistration, SetUser, UserActionType } from "../../types/user"
import { auth } from "../../firebase"
import AuthService from "../../api/AuthService"

export const setCurrentUser = (user: IUser): SetUser => ({
    type: UserActionType.SET_USER,
    payload: user
})

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