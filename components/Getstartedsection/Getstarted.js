import React from 'react'
import styles from "./Getstarted.module.css"

function Getstarted() {
  return (
    <div className="bg-[#F9FAFB] h-[374px] w-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-semibold mt-5 text-center">Get started with your online tutoring journey</h1>
            <p className="text-xl font-normal text-[#667085] my-2 text-center">Join millions of tutors around the world in tutoring online, at your convenience.</p>
            <button className={`bg-[#0C233A] text-white ${styles.signup} mt-10`}>Get started with Tutorship</button>
        </div>

    </div>
  )
}

export default Getstarted