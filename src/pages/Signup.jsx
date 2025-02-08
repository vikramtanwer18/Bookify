import { useFirebase } from "../context/Firebase";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup(){
 const navigate = useNavigate()
 const[email,setEmail] = useState('')
 const[password,setPassword] = useState('')
 const firebase = useFirebase()
 const singupUser = async(e)=>{
   e.preventDefault()
   try {
    const userCredential = await firebase.singupUserEmailWithPassword(email,password)
    console.log('user',userCredential)
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
      //value={password} onChange={(e)=>setPassword(e.target.value)}
      // <button type="submit" class="signup-btn">Sign Up</button>
      // <p class="login-link">Already have an account? <a href="/login">Login here</a></p>
        // <div className="container mt-5">
      <Form onSubmit={singupUser}>
     
     <div className="signup-container">
        <h2>Create Account </h2> 
        <form>
        <div className="signup-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="signup-group">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" required  value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <Button type="submit" className="signuup-btn">Signup</Button>          
            {/* <Button type="submit" className="signup-btn" onClick={()=>firebase.loginWithGoogle()} >Login with Google </Button> */}
            <p class="signup-link"><b>Already have an account? <a href="/login">Login here</a></b></p>
        </form> 
       </div>
     </Form>
    )
}
export default Signup