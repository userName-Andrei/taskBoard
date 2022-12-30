import { doc, setDoc } from "firebase/firestore";
import { IUser, IUserRegistration } from "../types/user";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";


export default class AuthService {
    static async setUserToBase(user: IUser) {
        setDoc(doc(db, 'users', `${user.id}`), user);
    }
    
    static async userRegister(userData: IUserRegistration) {
        return (await createUserWithEmailAndPassword(auth, userData.email!, userData.password!)).user;
    }
}