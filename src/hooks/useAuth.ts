import { IUser } from "../types/user";
import { useAppSelector } from "./useAppSelector"

interface IUserAuth extends IUser {
    isAuth: boolean,
}

export const useAuth = (): IUserAuth  => {
    const user = useAppSelector(state => state.auth.user);

    if (user) {
        return {
            isAuth: !!user,
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token: user.token
        }
    }

    return {
        isAuth: !!user,
        id: null,
        firstName: null,
        lastName: null,
        email: null,
        token: null
    }
}