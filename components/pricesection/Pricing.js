import React,{useState} from 'react'
import { Switch } from 'antd';
import styles from './Pricing.module.css'
import Image from 'next/image';


function Pricing() {
  const [checked, setChecked] = useState(false);

  const changeHandler = () => {
    setChecked(!checked);
  };

  return (
    <div className="lg:h-[1020px] h-[1420px] flex flex-col justify-center items-center md:mt-20 lg:mt-18 mt-44">
       <h1 className="font-bold text-4xl pb-0 text-center">Simple pricing, no commitment.</h1>
       <h2 className="text-2xl font-medium text-center">Choose a plan that works best for you and your tutoring business.</h2>
       <div className="flex justify-center items-center my-5">
       <Switch aria-label="switch" onChange={changeHandler} />
       <p className="mb-0 ml-2">Annual pricing <span className="text-blue-700">(save 20%)</span></p>
       </div>
        <div className="flex justify-center items-center  flex-wrap ml-4 ">
            {/* Card Item-1 */}
            <div className={` max-w-[592px] max-h-[522px] ${styles.Card} py-8 px-8 relative mx-4`}>
              <div className="flex flex-col justify-center items-center">
                  <p className="font-semibold text-xl mb-0">Basic plan</p>
                  <p className="text-5xl leading-[60px] font-semibold tracking-tight mb-2">Free</p>
                  <p className="text-base font-normal mb-5">No recurring payments</p>
                  <div className="flex justify-left  items-center w-full mb-2">
                      <Image src="/landing-page-vector/check-icon.svg" alt="check_Icon" width={20} height={20} />
                        <p className="text-xs md:text-base font-normal ml-2 mb-0 text-[#667085]">Set up your tutor profile</p>
                  </div>
                  <div className="flex justify-left items-center w-full mb-2">
                      <Image src="/landing-page-vector/check-icon.svg" alt="check_Icon" width={20} height={20} />
                        <p className="text-xs md:text-base font-normal ml-2 mb-0 text-[#667085]">Set up your availability for session bookings</p>
                  </div>
                  <div className="flex justify-left items-center w-full mb-2">
                      <Image src="/landing-page-vector/check-icon.svg" alt="check_Icon" width={20} height={20} />
                        <p className="text-xs md:text-base font-normal ml-2 mb-0 text-[#667085]">Collect automated payments</p>
                  </div>
                  <div className="flex justify-left items-center md:w-[492px] mb-2">
                      <Image src="/landing-page-vector/check-icon.svg" alt="check_Icon" width={20} height={20} />
                        <p className="text-xs md:text-base font-normal ml-2 mb-0 text-[#667085]">8% Tutorship service fee (excluding Stripe fees)</p>
                  </div>
                  <div className="flex justify-left items-center w-full mb-28 ">
                      <Image src="/landing-page-vector/check-icon.svg" alt="check_Icon" width={20} height={20} />
                        <p className="text-xs md:text-base font-normal ml-2 mb-0 text-[#667085]">Tutorship branding</p>
                  </div>
                  <div className="w-full text-center bg-[#F9FAFB] p-8 absolute bottom-0 border-l border-r rounded-b-lg">
                  <button className={`${styles.buttonstyle} max-w-[528px] flex-grow  w-full text-white`}>Get started</button>
                </div>
              </div>
            </div>
            {/* Card Item-2 */}
            <div className={` max-w-[592px] max-h-[522px]  ${styles.Card} py-8 px-8 relative  mx-4`}>
              <div className="flex flex-col justify-center items-center">
                  <p className="font-semibold text-xl mb-0">Business plan</p>
                  <p className="text-5xl leading-[60px] font-semibold tracking-tight mb-2">{checked?"$144":"$15" }<span className="text-xl font-bold">/ {checked?"year":"month" }</span></p>
                  <p className="text-base font-normal mb-5">Billed annually.</p>
                  <div className="flex justify-left  items-center w-full mb-2">
                      <Image src="/landing-page-vector/check-icon.svg" alt="check_Icon" width={20} height={20} />
                        <p className="text-base font-normal ml-2 mb-0 text-[#667085]">Set up your tutor profile</p>
                  </div>
                  <div className="flex justify-left items-center w-full mb-2">
                      <Image src="/landing-page-vector/check-icon.svg" alt="check_Icon" width={20} height={20} />
                        <p className="text-base font-normal ml-2 mb-0 text-[#667085]">Set up your availability for session bookings</p>
                  </div>
                  <div className="flex justify-left items-center w-full mb-2">
                      <Image src="/landing-page-vector/check-icon.svg" alt="check_Icon" width={20} height={20} />
                        <p className="text-base font-normal ml-2 mb-0 text-[#667085]">Collect automated payments</p>
                  </div>
                  <div className="flex justify-left items-center md:w-[492px] mb-2">
                      <Image src="/landing-page-vector/check-icon.svg" alt="check_Icon" width={20} height={20} />
                        <p className="text-base font-normal ml-2 mb-0 text-[#667085]">8% Tutorship service fee (excluding Stripe fees)</p>
                  </div>
                  <div className="flex justify-left items-center w-full mb-28 ">
                      <Image src="/landing-page-vector/check-icon.svg" alt="check_Icon" width={20} height={20} />
                        <p className="text-base font-normal ml-2 mb-0 text-[#667085]">Tutorship branding</p>
                  </div>
                  <div className="w-full text-center bg-[#F9FAFB] p-8 absolute bottom-0 border-l border-r rounded-b-lg">
                  <button className={`${styles.buttonstyle} max-w-[528px] flex-grow  w-full text-white`}>Get started</button>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing