import { doc, getDoc, setDoc } from "firebase/firestore";
import { IUser, IUserLogin, IUserRegistration } from "../types/user";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export default class AuthService {
    static async setUserToBase(user: IUser) {
        setDoc(doc(db, 'users', `${user.id}`), user);
    }

    static async fetchUserFromBase(userId: string) {
        return (await getDoc(doc(db, "users", `${userId}`))).data();
    }
    
    static async userRegister(userData: IUserRegistration) {
        return (await createUserWithEmailAndPassword(auth, userData.email!, userData.password!)).user;
    }

    static async userLogin(userData: IUserLogin) {
        return (await signInWithEmailAndPassword(auth, userData.email!, userData.password!)).user;
    }
}