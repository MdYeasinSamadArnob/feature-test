import { AuthProvider } from '../src/hooks/auth'
import '../styles/globals.css'
import "../src/firebase"
import ProgressBar from "@badrap/bar-of-progress"
import Router from "next/router"

const progress=new ProgressBar({
  size:6,
  color: '#2A72B9',
  className: 'z-50',
  delay:0,
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on("routeChangeError", progress.finish)



// import useAuth from "../src/hooks/auth"
// import firebase from "firebase/compat/app";
// import {useEffect} from 'react'
// import '@themesberg/flowbite';

function MyApp({ Component, pageProps }) {

  // const {setUser}=useAuth()
    

    // useEffect(()=>{
    //   const {setUser}=useAuth()
    //     firebase.auth().onAuthStateChanged(function(user) {
    //         setUser(user)
    //     });
    // },[])


  return ( <AuthProvider>
    <Component {...pageProps}/>
  </AuthProvider>
  )
}

export default MyApp
