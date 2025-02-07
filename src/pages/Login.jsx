import { useFirebase } from "../context/Firebase";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

import "./Login.css";

function Login(){
 const navigate = useNavigate()
 const[email,setEmail] = useState('')
 const[password,setPassword] = useState('')
 const firebase = useFirebase()
 const loginUser = async(e)=>{
   e.preventDefault()
   try {
    const userCredential = await firebase.loginWithEmailAndPassword(email,password)
    console.log('user Succesfully login',userCredential)
   } catch (error) {
    console.log("Error while signup the user",error)
   }
 }

 useEffect(()=>{
    if(firebase.isLogedIn){
        // navigate to home
        navigate('/')
    }
 },[firebase,navigate])
 
    return(
      // value={email} onChange={(e)=>setEmail(e.target.value)}
      // value={password} onChange={(e)=>setPassword(e.target.value)}
      // <button type="submit" className="btn"onClick={()=>firebase.loginWithGoogle()} >Login with Google </button>
       
      <form onSubmit={loginUser}>
     
        <div className="login-container">
        <h2>Login</h2> 
        <form>
        <div className="input-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="input-group">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" required  value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <Button type="submit" className="login-btn">login</Button>          
            <Button type="submit" className="login-btn" onClick={()=>firebase.loginWithGoogle()} >Login with Google </Button>
        </form> 
       </div>
    </form>
    
    )
}
export default Login