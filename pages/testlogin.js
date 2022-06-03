import React,{useEffect} from 'react'
import useAuth from '../src/hooks/auth'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";


function Login() {
    const {user,loginWithGoogle,error,setUser}=useAuth()
    

    useEffect(()=>{
        firebase.auth().onAuthStateChanged(function(user) {
            setUser(user)
        });
    },[])



  return (
    <div>login
        {/* {error && <h1>{error}</h1>} */}
        <button onClick={loginWithGoogle}>Google Login</button>
        <h1>{user?.uid}</h1>
    </div>
  )
}

export default Login