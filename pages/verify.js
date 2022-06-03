import React,{useEffect} from 'react'
import Navbar from '../components/navbar/Navbar'
import { useRouter } from 'next/router';
import useAuth from '../src/hooks/auth'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

function Verify() {
    const { query } = useRouter();
    const {user,loginWithGoogle,error,setUser}=useAuth()

    useEffect(()=>{
        firebase.auth().onAuthStateChanged(function(user) {
            setUser(user)
            console.log("The user from Login Page is--",user)
        });
    },[])

    const handleResend = () => {
        firebase.auth().currentUser.sendEmailVerification({
            url: process.env.NODE_ENV==="development"?"http://localhost:3000":"https://tutorshipprojectpreview.netlify.app/",
        }).then(function() {
            // Email sent.
        }).catch(function(error) {
            // An error happened.
        });
    }

  return (
      <>
    <Navbar/>
    <div className="bg-[url('/Sign-in/blob-2.svg')] bg-no-repeat h-screen bg-left  bg-[length:200px_400px] md:bg-[length:15%_120%] bg-[position:0%_50%] lg:bg-[position:0%_10%] ">
     <div className="bg-[url('/Sign-in/blob-1.svg')] bg-no-repeat md:bg-auto h-full bg-right-bottom bg-[length:30%]">
         <section className="md:w-1/2 w-11/12 mx-auto flex flex-col justify-start pt-10 md:pt-0 md:justify-center items-center h-full space-y-4">
                <h1 className="font-semibold text-3xl">Verify your email</h1>
                <p className="w-[317px] h-[184px] text-center">You’re almost there! We sent an email to <span className="text-blue-700 font-medium">{query.email}</span> for verification.<br/> We strive to build a trusted and safe platform for all our users.<br/>
You may need to check your spam folder if you don’t see it in your inbox.</p>
                <p>Did you not recieve your email?<span className="text-blue-700 cursor-pointer" onClick={handleResend}>Resend email</span></p>
         </section>
        </div>
         </div>
    </>

  )
}

export default Verify;