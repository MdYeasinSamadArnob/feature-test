import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footersection/Footer'
import Getstarted from '../components/Getstartedsection/Getstarted'
import Info from '../components/Infosection/Info'
import Intro from '../components/Introsection/Intro'
import Navbar from '../components/navbar/Navbar'
import Pricing from '../components/pricesection/Pricing'
import LangingPage from '../layouts/LangingPage'
import styles from '../styles/Home.module.css'
import useAuth from "../src/hooks/auth";
import HomePage from '../layouts/HomePage'
import {useEffect} from 'react'
import firebase from "firebase/compat/app";

export default function Home() {


  const {user,loginWithGoogle,error,setUser}=useAuth()
    
  console.log("The Index say- ",user)

  useEffect(()=>{
    firebase.auth().onAuthStateChanged(function(user) {
        setUser(user)
        console.log("The user from Login Page is--",user)
    });
},[])

    

  return (
    <div >
      <Head>
        <title>Tutorship Website</title>
        <meta name="description" content="Tutorship Website" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="stylesheet" href="https://unpkg.com/flowbite@latest/dist/flowbite.min.css" /> */}
      </Head>

      <Navbar/>

      <main className="my-20 w-full overflow-hidden relative">

      {/* <Intro/>
      <Info/>
      <Pricing/>
      <Getstarted/> */}
      {user?<HomePage/>:<LangingPage/>}

      {/* <Footer/> */}

      {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
    </main>
    {/* <script src="https://unpkg.com/flowbite@latest/dist/flowbite.js"></script> */}
    </div>
  )
}
