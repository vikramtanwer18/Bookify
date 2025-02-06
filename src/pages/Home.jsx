import { useEffect } from "react"
import {useFirebase}  from "../context/Firebase"
import { useNavigate } from "react-router-dom"

function Home(){
    const firebase = useFirebase()
    return(
        <div>
            
            Home
            <div>
                <button onClick={()=>firebase.signoutUser()}>Sign out</button>
                </div>
        </div>
    )
}

export default Home