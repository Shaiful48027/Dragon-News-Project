import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/FirebaseConfig";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const creatNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };


    const userLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    };

    const logOut = () => {
        return signOut(auth)
    };

    const authInfo = {
        user,
        setUser,
        creatNewUser,
        logOut,
        userLogin
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currnetUser) => {
            setUser(currnetUser);
        })
        return () => {
            unsubscribe()
        }
    })

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;