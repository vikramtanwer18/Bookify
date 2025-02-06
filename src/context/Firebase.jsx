import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth ,signInWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut} from "firebase/auth";
import { getFirestore ,collection ,addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const FirebaseContext = createContext(null)

const firebaseConfig = {
    apiKey: "AIzaSyAOlgm3XEIK1IZdFvv6aJ5Edsgs8f4jmIc",
    authDomain: "my-bookify-8c591.firebaseapp.com",
    projectId: "my-bookify-8c591",
    storageBucket: "my-bookify-8c591.firebasestorage.app",
    messagingSenderId: "308955904414",
    appId: "1:308955904414:web:481e359e75116386d7be8f"
  };

export const firebaseApp = initializeApp(firebaseConfig)

const userAuth = getAuth(firebaseApp)
const googleProvider = new GoogleAuthProvider()
const firestoreDatabase = getFirestore(firebaseApp)

export const useFirebase = ()=> useContext(FirebaseContext)

function FirebaseProvider({children}){
    const [user,setUser] = useState(null)
    const navigate = useNavigate()
   const singupUserEmailWithPassword = (email,password)=>{
   return createUserWithEmailAndPassword(userAuth,email ,password)
   }

   const loginWithEmailAndPassword = (email,password)=>{
    return signInWithEmailAndPassword(userAuth,email,password)
   }

   const loginWithGoogle = async()=> await signInWithPopup(userAuth,googleProvider)
   useEffect(()=>{
    onAuthStateChanged(userAuth,user=>{
        if(user) setUser(user)
        else setUser(null)    
    })
   },[])

 const signoutUser = async()=>{
  console.log("user signout successfully")
   await signOut(userAuth)
   navigate('/login')
 }  

 const addDataInFirestore = (bookName,ISBN,price,coverPic)=>{
  

 }

 const isLogedIn = user ? true :false;
 
    return(
       <FirebaseContext.Provider value={{
       signoutUser,
       isLogedIn,
       loginWithGoogle,
       singupUserEmailWithPassword,
       loginWithEmailAndPassword,
       addDataInFirestore}}>
        {children}
       </FirebaseContext.Provider>
    )
}

export default FirebaseProvider;