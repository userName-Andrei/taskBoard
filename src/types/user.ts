export interface IUser {
    id: string | null,
    firstName: string | null,
    lastName?: string | null,
    email: string | null,
    token?: string | null
}

export interface IUserRegistration extends IUser {
    password: string | null
}

export interface IUserLogin {
    email: string | null,
    password: string | null
}

export interface UserState {
    user: IUser | null,
    loading: boolean,
    error: string | null
}

export enum UserActionType {
    AUTH_ME = "AUTH_ME",
    AUTH_ME_ERROR = "AUTH_ME_ERROR",
    AUTH_LOGIN = "AUTH_LOGIN",
    AUTH_LOGIN_SUCCESS = "AUTH_LOGIN_SUCCESS",
    AUTH_LOGIN_ERROR = "AUTH_LOGIN_ERROR",
    AUTH_LOGOUT = "AUTH_LOGOUT",
    AUTH_LOGOUT_ERROR = "AUTH_LOGOUT_ERROR",
    AUTH_REGISTER = "AUTH_REGISTER",
    AUTH_REGISTER_SUCCESS = "AUTH_REGISTER_SUCCESS",
    AUTH_REGISTER_ERROR = "AUTH_REGISTER_ERROR",
    SET_USER = "SET_USER"
}

export interface SetUser {
    type: UserActionType.SET_USER,
    payload: IUser
}

export interface AuthMe {
    type: UserActionType.AUTH_ME,
    payload: IUser
}

export interface AuthMeError {
    type: UserActionType.AUTH_ME_ERROR,
    payload: string
}

export interface AuthLogin {
    type: UserActionType.AUTH_LOGIN,
}

export interface AuthLoginSuccess {
    type: UserActionType.AUTH_LOGIN_SUCCESS,
    payload: IUser
}

export interface AuthLoginError {
    type: UserActionType.AUTH_LOGIN_ERROR,
    payload: string
}

export interface AuthRegister {
    type: UserActionType.AUTH_REGISTER,
}

export interface AuthRegisterSuccess {
    type: UserActionType.AUTH_REGISTER_SUCCESS,
    payload: IUser
}

export interface AuthRegisterError {
    type: UserActionType.AUTH_REGISTER_ERROR,
    payload: string
}

export interface AuthLogout {
    type: UserActionType.AUTH_LOGOUT
}

export interface AuthLogoutError {
    type: UserActionType.AUTH_LOGOUT_ERROR,
    payload: string
}


export type UserAction = AuthMe | AuthMeError |
                         AuthLogin | AuthLoginSuccess | AuthLoginError |
                         AuthRegister | AuthRegisterSuccess | AuthRegisterError |
                         AuthLogout | AuthLogoutError |
                         SetUser;
