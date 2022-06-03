import React from 'react'
import styles from "./intro.module.css"
import {useRouter} from "next/router"

function Intro() {
    const router=useRouter()
  return (
    <div className="bg-[url('/landing-page-vector/blob-1.svg')] bg-no-repeat md:bg-contain h-[810px] bg-[length:200px_800px]">
     <div className="bg-[url('/landing-page-vector/blob-2.svg')] bg-no-repeat md:bg-contain h-full bg-[right_top_2rem] bg-[length:200px_800px]">
         <section className="md:w-1/2 w-11/12 mx-auto flex flex-col justify-start pt-10 md:pt-0 md:justify-center items-center h-full space-y-4">
             <h1 className="text-center text-5xl md:text-[63px] md:px-5 w-full md:max-w-[812px] leading-[76px] text-[#0C233A] font-bold">
             Empowering online tutors to get paid on time. 💸
             </h1>
             <h2 className="text-center max-w-[880px] text-[24px] font-medium pb-8">
            Automate your payments, book more sessions, and tutor students with ease.
            </h2>
            <div className="space-x-3 mt-4">
            <button onClick={()=>router.push("/signup")} className={`bg-[#0C233A] text-white ${styles.signup}`}>Sign Up</button>
            <button className={`${styles.joinbutton}`}>Join us on Discord</button>
            </div>
         </section>

     </div>
    </div>
  )
}

export default Intro