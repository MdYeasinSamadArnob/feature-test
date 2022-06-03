import React,{useState,useEffect} from 'react'
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { MailOutlined  } from '@ant-design/icons';
import { Checkbox } from 'antd';
import styles from "./Login.module.css"
import Image from "next/image"

import useAuth from "../../src/hooks/auth"
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useRouter } from "next/router"




function Login(props) {

    const {user,loginWithGoogle,error,setUser,signInUserWithEmailAndPassword,accountError}=useAuth()
    const router=useRouter()


    

    useEffect(()=>{
        firebase.auth().onAuthStateChanged(function(user) {
            if(user){
                router.push('/')
            }
        });
    },[])


    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [valid,setValid]=useState(true)
    const [validPassword,setValidPassword]=useState(true)
    const [validEmail,setValidEmail]=useState(true)


    console.log(props)

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
      }


      const handlePasswordCheck = e => {
        setPassword(e.target.value);
      };

      const handleSubmit = e => {
        e.preventDefault();
        console.log("Error from fileSubmit",error);
        if(error){
            setValid(false)
        }
        console.log(`password = ${password}`);

        // if(checked) {

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            console.log("Email is correct");
            setValidEmail(true)
        }else{
            setValidEmail(false)
    alert("You have entered an invalid email address!")
        }

        //Check Password is minimum 8 characters
        if (password.length < 8) {
            setValidPassword(false)
            alert("Password must be at least 8 characters long.");
           
        }   else{
            setValidPassword(true)
        }

        if(validEmail && validPassword ){
            //do stuffs
            signInUserWithEmailAndPassword(email,password)
        }

    // }
        };

        const handleEmail= e => {
            setEmail(e.target.value);
        }

  return (
    <div className="bg-[url('/Sign-in/blob-2.svg')] bg-no-repeat h-screen bg-left  bg-[length:200px_400px] md:bg-[length:15%_120%] bg-[position:0%_50%] lg:bg-[position:0%_10%] ">
     <div className="bg-[url('/Sign-in/blob-1.svg')] bg-no-repeat md:bg-auto h-full bg-right-bottom bg-[length:30%]">
         <section className="md:w-1/2 w-11/12 mx-auto flex flex-col justify-start pt-10 md:pt-0 md:justify-center items-center h-full space-y-4">

             <h1 className="font-semibold text-3xl mb-0 mt-12 lg:mt-0">Log in to your account</h1>
             <p className="font-normal text-base mt-3">Welcome back! Please enter your details.</p>
             <form onSubmit={handleSubmit} className="space-y-5">
             <div id='email' className="flex flex-col">
                 <label className="font-normal text-sm text-gray-700">Email</label>
             <Input status={valid?"":"error"} onChange={handleEmail} required id="emailInput" className=" rounded-lg w-[360px] h-[44px] " placeholder="Enter your email" prefix={<MailOutlined className="text-[#667085] mr-2  font-normal text-lg pb-1" />}/>
             </div>
             <div id='email' className="flex flex-col">
             <label className="font-normal text-sm text-gray-700">Password</label>
             <Input.Password
             required
             id="passwordInput"
             status={valid?"":"error"}
             className=" rounded-lg w-[360px] h-[44px] "
             placeholder="Enter your password"
             onChange={handlePasswordCheck}
             iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    />
            
            {!valid && <p className="text-red-500 text-xs italic">User Does not exist,Please Enter a Valid Password or Email</p>}
             </div>
             <div className="flex justify-between items-center w-[360px]">
             <Checkbox id="checkbox" onChange={onChange}><span className="font-medium text-sm">Remember for 30 days</span></Checkbox>
             <p className="mb-0 font-medium text-sm text-[#0273CE] ">Forgot password</p>
             </div>
             {accountError?<p className="text-red-500 text-xs italic">{accountError}</p>:""}
             <div className="w-[360px]">
             <button  type="submit" className={`bg-[#0C233A] text-white ${styles.signup} max-w-[360px]   w-full font-medium text-base`}>Login</button>
             </div >
             </form>
             <div className="w-[360px]">
             <button onClick={loginWithGoogle} className={` border border-[#D0D5DD] ${styles.signup} max-w-[360px]   w-full font-medium text-base flex justify-center items-center bg-white`}>
                 <Image src={"/Sign-in/Social-icon - Google.svg"} width={25} height={25} /> 
                 <span className="ml-2">Log in with Google</span>
                 </button>
             </div >
             <div className="w-[360px]">
                 <p className="text-center">Don’t have an account? <span className="mb-0 font-medium text-sm text-[#0273CE] " onClick={()=>router.push("/signup")}>Sign up</span></p>
                 
             </div>
             </section>
             </div>
             </div>
  )
}

export default Login