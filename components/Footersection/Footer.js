import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <footer className="h-[345px] w-full bg-[#0C233A]">
        <div className=" bg-[#0C233A] mx-auto h-full w-full lg:w-3/5 flex flex-col justify-center items-center">
         <div className="flex justify-between items-center w-full px-10">
             <Image src="/Logos/white-tutorship-logo(outlines).svg" alt="LogoWhite_Icon" width={170} height={150} className="cursor-pointer" />
             <div className=" w-full flex justify-end items-center">
                 <div className="mx-3 cursor-pointer">
                 <Image src="/landing-page-vector/twitter-icon.svg" alt="Twitter_Icon" width={20} height={20} />
                 </div>
                 <div className="mx-3 cursor-pointer">
                 <Image src="/landing-page-vector/linkedin-icon.svg" alt="Linkedin_Icon" width={20} height={20} />
                 </div>
                 <div className="mx-3 cursor-pointer">

                <Image src="/landing-page-vector/facebook-icon.svg" alt="Facebook_Icon" width={20} height={20} />
                </div>

            </div> 
         </div>
         <div className="w-full flex justify-start items-center mt-3 px-4 lg:px-0">
                <p className="text-left text-white text-xs lg:text-base font-medium mr-8 cursor-pointer">Product</p>
                <p className="text-left text-white text-xs lg:text-base font-medium mr-8 cursor-pointer">Community</p>
                <p className="text-left text-white text-xs lg:text-base font-medium mr-8 cursor-pointer">Careers</p>
                <p className="text-left text-white text-xs lg:text-base font-medium mr-5 cursor-pointer">Help</p>
                <p className="text-left text-white text-xs lg:text-base font-medium mr-5 cursor-pointer">Privacy</p>

         </div>
         <div className='w-full'>
             <hr className="w-full bg-[#475467] mt-16 h-0" />
         </div>
         <div className='w-full flex justify-between items-center mt-4'>
                <p className="text-center text-[#98A2B3] text-[9px] lg:text-base font-normal mt-4">© 2022 Tutorship, product of Vuflux Inc. All rights reserved.</p>
                <div className="flex justify-center items-center">
                <p className="text-center text-[#98A2B3] text-[9px] lg:text-base font-normal mt-4 mx-2 cursor-pointer">Terms</p>
                <p className="text-center text-[#98A2B3] text-[9px] lg:text-base font-normal mt-4 mx-2 cursor-pointer">Privacy</p>
                <p className="text-center text-[#98A2B3] text-[9px] lg:text-base font-normal mt-4 mx-2 cursor-pointer">Cookies</p>
                </div>
         </div>
        </div>
           
    </footer>
  )
}

export default Footer