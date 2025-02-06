import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth ,signInWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut} from "firebase/auth";
import { getFirestore ,collection ,addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const FirebaseContext = createContext(null)


const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_FIREBASE_KEY,
    authDomain: import.meta.env.VITE_API_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_API_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_API_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_API_FIREBASE_MESSAGE_ID,
    appId: import.meta.VITE_API_FIREBASE_APP_ID
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



 const isLogedIn = user ? true :false;
 
    return(
       <FirebaseContext.Provider value={{
       signoutUser,
       isLogedIn,
       loginWithGoogle,
       singupUserEmailWithPassword,
       loginWithEmailAndPassword,
       }}>
        {children}
       </FirebaseContext.Provider>
    )
}

export default FirebaseProvider;