import { useFirebase } from "../context/Firebase";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
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
        <div className="container mt-5">
      <Form onSubmit={singupUser}>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  value={email} onChange={(e)=>setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Create Account
      </Button>
    </Form>
    </div>
    )
}
export default Signup