import React,{useEffect} from 'react'
import useAuth from '../src/hooks/auth'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import Navbar from '../components/navbar/Navbar';
import Login from '../components/Loginsection/Login';


function Logins() {
    const {user,loginWithGoogle,error,setUser}=useAuth()
    

    useEffect(()=>{
        firebase.auth().onAuthStateChanged(function(user) {
            setUser(user)
        });
    },[])



  return (
    <div className="my-0 w-full overflow-hidden">
      <Navbar/>
      <Login/>
      </div>
  )
}

export default Logins