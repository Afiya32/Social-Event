/* eslint-disable react/prop-types */
import { createContext, useEffect } from "react";
import {  useState } from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import app from "../firebase.config";



export const AuthContext=createContext(null);

const auth=getAuth(app);
const googleProvider= new GoogleAuthProvider();


const AuthProvider = ({children}) => {
//   googlesignup
const googleSignin=()=>{
    return signInWithPopup(auth,googleProvider);
}
// loading
const [loading,setLoading]=useState(true)
//signup with email password
const signup=(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
}
// sign in with email password
const signin=(email,password)=>{
    setLoading(true);
return signInWithEmailAndPassword(auth,email,password)
}
// stay user
useEffect(()=>{
    const unSubcribe =onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false)
        return ()=>{
            return unSubcribe()
        }
    })
},[])
const logout=()=>{
    setLoading(true)
    return signOut(auth)
}
const [user,setUser]=useState("")
     const AuthInfo={
        googleSignin,signup,signin,user,logout,loading,
     }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;