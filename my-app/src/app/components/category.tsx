import React from 'react'
import { CiMobile4 } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { SiYoutubegaming } from "react-icons/si";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";


export default function Category() {
  return (
    <div className='w-full flex justify-center items-center mt-10 mb-1'>
      <div className='sm:w-full md:w-[88%] lg:w-[70%] pb-10'>
        <div className='flex flex-col sm:pl-[6%] md:pl-0'>
          <h3 className='text-red-500 font-bold border-l-8 border-red-500 pl-3 ml-1'>
            Categories
          </h3>
          <div className='flex justify-between items-center mb-3'>
            <h3 className='text-slate-800 font-bold sm:text-md md:text-3xl lg:text-3xl pt-4'>Browse By Category</h3>
            {/* navigation */}
            <div className=' flex gap-2'>
                    <div className='w-[46px] h-[46px] bg-neutral-100 rounded-full flex justify-center items-center cursor-pointer'>
                    <FaArrowLeftLong  className='text-black'/>

                    </div>

                    <div className='w-[46px] h-[46px] bg-neutral-100 rounded-full flex justify-center items-center cursor-pointer'>
                    <FaArrowRightLong  className='text-black'/>

                    </div>
                 </div>
          </div>
          
                 
        </div>

        {/* categories */}
        <div className='flex sm:flex-col md:flex-row sm:justify-center md:justify-between mt-5 sm-flex-wrap lg:flex-nowrap gap-5 sm:gap-8'>

        
        {/* box-1 */}
        <div className='group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative'>
          <CiMobile4 className='text-5xl font-bold' />
          <p className='font-normal'>Phone</p>
        </div>
        {/* box-2 */}
        <div className='group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative'>
          <RiComputerLine className='text-5xl font-bold' />
          <p className='font-normal'>Computer</p>
        </div>
        {/* box- 3*/}
        <div className='group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative'>
          <BsSmartwatch className='text-5xl font-bold' />
          <p className='font-normal'>Smart Watch</p>
        </div>
        {/* box- 4*/}
        <div className='group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative'>
          <CiCamera className='text-5xl font-bold' />
          <p className='font-bold'>Camera</p>
        </div>
        {/* box- 5*/}
        <div className='group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative'>
          <CiHeadphones className='text-5xl font-bold' />
          <p className='font-bold'>Headphone</p>
        </div>
        {/* box- 6*/}
        <div className='group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative'>
          <SiYoutubegaming className='text-5xl font-bold' />
          <p className='font-normal'>Headphone</p>
        </div>
        </div>

      </div>

    </div>
  )
}
