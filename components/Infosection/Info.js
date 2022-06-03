import Image from 'next/image'
import React from 'react'
import { ArrowSmRightIcon } from '@heroicons/react/solid'


function Info() {
  return (
    <div className="lg:h-[560px] md:h-[960px] h-[1160px] flex flex-col justify-center items-center -my-40 lg:-my-0">
        <h1 className="font-bold text-4xl pb-10 text-center">Streamline your online tutoring</h1>
        <div className="flex justify-center items-center md:space-x-10 flex-wrap ">
            {/* Items are here */}
            <div className="flex flex-col justify-center items-center mb-10">
                <Image src="/landing-page-vector/profile-icon.svg" alt="profile_Icon" width={50} height={50} />
                <h2 className="font-semibold text-xl pt-4">Set up your tutor profile</h2>
                <p className="max-w-[360px] font-normal text-base text-center not-italic text-[#667085]">Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
                <div className="flex justify-center items-center cursor-pointer">
                <p className="font-medium text-base text-[#0273CE] mb-0">Get started </p>
                <ArrowSmRightIcon className="h-5 w-5 text-blue-500"/>
                </div>
            </div>
                {/* 2nd Item */}

            <div className="flex flex-col justify-center items-center mb-10">
                <Image src="/landing-page-vector/calendar-icon.svg" alt="profile_Icon" width={50} height={50} />
                <h2 className="font-semibold text-xl pt-4">Book sessions & collect payments</h2>
                <p className="max-w-[360px] font-normal text-base text-center not-italic text-[#667085]">An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
                <div className="flex justify-center items-center cursor-pointer">
                <p className="font-medium text-base text-[#0273CE] mb-0">Get started </p>
                <ArrowSmRightIcon className="h-5 w-5 text-blue-500"/>
                </div>
            </div>
                {/* 3rd Item */}
            <div className="flex flex-col justify-center items-center mb-10">
                <Image src="/landing-page-vector/session-icon.svg" alt="profile_Icon" width={50} height={50} />
                <h2 className="font-semibold text-xl pt-4">Tutor online with ease</h2>
                <p className="max-w-[360px] font-normal text-base text-center not-italic text-[#667085]">Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
                <div className="flex justify-center items-center cursor-pointer">
                <p className="font-medium text-base text-[#0273CE] mb-0">Get started </p>
                <ArrowSmRightIcon className="h-5 w-5 text-blue-500"/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Info