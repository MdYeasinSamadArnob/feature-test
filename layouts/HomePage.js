import React,{useEffect} from 'react'
import Navbar from '../components/navbar/Navbar'
import useAuth from "../src/hooks/auth";
import firebase from "firebase/compat/app"

function HomePage() {
  const {user,loginWithGoogle,error,setUser,deleteAccount}=useAuth()
    

  useEffect(()=>{
      firebase.auth().onAuthStateChanged(function(users) {
          setUser(users)
          console.log("The user from Login Page is--",users)
      });
  },[])
  return (
    <>
    <Navbar loggedIn={true}/>
    <h1>Some Values Received From Firebase Auth</h1>
    <p>{`uid: ${user?.uid}`}</p>
    <p>{`DisplayName: ${user?.displayName}`}</p>
    <p>{`Email: ${user?.email}`}</p>
    <p>{`PhotoURL: ${user?.photoURL}`}</p>
    <p>{`ProviderId: ${user?.providerId}`}</p>
    <p>{`isAnonymous: ${user?.isAnonymous}`}</p>
    <p>{`isEmailVerified: ${user?.emailVerified}`}</p>
    <p>{`accessToken: ${user?._delegate.accessToken}`}</p>
    <p>{`Metadata_CreatedAT: ${user?.metadata.createdAt}`}</p>
    <p>{`Metadata_CreationTime: ${user?.metadata.creationTime}`}</p>
    <p>{`Metadata_LastLoginAt: ${user?.metadata.lastLoginAt}`}</p>
    <p>{`Metadata_LastSignInTime: ${user?.metadata.lastSignInTime}`}</p>

    <h1>For Deleting Account From User End</h1>
    <button className="bg-red-500 p-5 text-white rounded-lg"  onClick={deleteAccount}>Delete Account</button>


    {/* <p>{user.email}</p>
    <p>{user.photoURL}</p>
    <p>{user.phoneNumber}</p>
    <p>{user.providerId}</p>
    <p>{user.isAnonymous}</p>
    <p>{user.isEmailVerified}</p>
    <p>{user.emailVerified}</p>
    <p>{user.providerData}</p>
    <p>{user.metadata}</p> */}


    </>
  )
}

export default HomePage