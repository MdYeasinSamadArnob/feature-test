import React,{useState,useEffect} from 'react'
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { MailOutlined  } from '@ant-design/icons';
import { Checkbox } from 'antd';
import styles from "./Signup.module.css"
import Image from "next/image"

import useAuth from "../../src/hooks/auth"
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useRouter } from "next/router"


function Signup() {

    const {user,loginWithGoogle,error,setUser,createUserWithEmailAndPassword,accountError}=useAuth()

    const router=useRouter()


    

    useEffect(()=>{
        firebase.auth().onAuthStateChanged(function(user) {
            if(user){
                router.push('/')
            }
        });
    },[])



    const [password,setPassword]=useState("")
    const [checked,setChecked]=useState(false)
    const [email,setEmail]=useState("")
    const [validEmail,setValidEmail]=useState(true)
    const [validPassword,setValidPassword]=useState(true)
    const [userName,setUserName]=useState("")

   

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
        setChecked(e.target.checked)
      }

      const handlePasswordCheck = e => {
        setPassword(e.target.value);
      };

      const handleSubmit = e => {
        e.preventDefault();
        console.log(`password = ${password}`);

        if(checked) {

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

        if(validEmail && validPassword && checked){
            //do stuffs
            // localstorage store username
            localStorage.setItem(email,userName)
            createUserWithEmailAndPassword(email,password)
            console.log("Error from if statement---",error)
        }

    }
        };

        const handleEmail= e => {
            setEmail(e.target.value);
        }

console.log(validEmail)
  return (
    <div className="bg-[url('/Sign-in/blob-2.svg')] bg-no-repeat h-screen bg-left  bg-[length:200px_400px] md:bg-[length:15%_120%] bg-[position:0%_50%] lg:bg-[position:0%_10%] ">
     <div className="bg-[url('/Sign-in/blob-1.svg')] bg-no-repeat md:bg-auto h-full bg-right-bottom bg-[length:30%]">
         <section className="md:w-1/2 w-11/12 mx-auto flex flex-col justify-start pt-10 md:pt-0 md:justify-center items-center h-full space-y-4">

             <h1 className="font-semibold text-3xl mb-0 mt-12 lg:mt-0">Sign up to Tutorship</h1>
             <p className="font-normal text-base mt-3 text-[#667085]">Create an account</p>
             <form onSubmit={handleSubmit} className="space-y-5">
             <div id='email' className="flex flex-col">
                 <label className="text-sm font-medium text-gray-700">Full name</label>
             <Input onChange={(e)=>setUserName(e.target.value)}   required id="emailInput" className=" rounded-lg w-[360px] h-[44px] " placeholder="Enter your full name" />
             </div>
             <div id='signupEmail' className="flex flex-col">
                 <label className=" font-medium text-sm text-gray-700">Email</label>
             <Input onChange={handleEmail} status={validEmail?"":"error"} required id="emailInput" className=" rounded-lg w-[360px] h-[44px] " placeholder="Enter your email" prefix={<MailOutlined className="text-[#667085] mr-2  font-normal text-lg pb-1" />}/>
             {validEmail?"":<p className="text-red-500">*Please Provide a Valid Email </p>}
             </div>
             <div id='signupPassword' className="flex flex-col">
             <label className=" font-medium text-sm text-gray-700">Password</label>
             <Input.Password
             required
             id="passwordInput"
             className=" rounded-lg w-[360px] h-[44px] "
             placeholder="Enter your password"
             onChange={handlePasswordCheck}
             value={password}
             iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    />
            {validPassword?<p>Must be at least 8 characters.</p>:<p className="text-red-500">*Must be at least 8 characters.</p>}
            {accountError?<p className="text-red-500 w-[360px]">*{accountError}</p>:""}
             </div>
             <div className="flex justify-between items-center w-[360px]">
             <Checkbox id="checkbox" onChange={onChange}><span className="font-normal text-sm text-[#9B9B9B]">I agree to the </span><span className="mb-0 font-medium text-sm text-[#0273CE]">terms of service</span></Checkbox>
             
             </div>
             <div className="w-[360px]">
             <button type="submit" className={`bg-[#0C233A] text-white ${styles.signup} max-w-[360px]   w-full font-medium text-base`}>Sign up</button>
             </div >
             </form>
             <div className="w-[360px]">
             <button onClick={loginWithGoogle} className={` border border-[#D0D5DD] ${styles.signup} max-w-[360px]   w-full font-medium text-base flex justify-center items-center bg-white`}>
                 <Image src={"/Sign-in/Social-icon - Google.svg"} width={25} height={25} /> 
                 <span className="ml-2">Sign up with Google</span>
                 </button>
             </div >
             <div className="w-[360px]">
                 <p className="text-center">Already have an account? <span className="mb-0 font-medium text-sm text-[#0273CE] cursor-pointer" onClick={()=>router.push("/login")}>Sign in</span></p>
                 
             </div>
             </section>
             </div>
             </div>
  )
}

export default Signup