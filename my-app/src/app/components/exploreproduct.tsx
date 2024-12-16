import React from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Eproducts from './eproduct';



export default function Explore() {
    return (
        <div className='w-full flex justify-center items-center mt-4 mb-1 pt-20'>
            <div className='sm:w-full md:w-[80%] pb-10'>
                <div className='flex justify-center items-center w-full'>
                    <div>
                        <h3 className='text-red-500 font-bold border-l-8 border-red-500 pl-3 ml-1 inline-block'>Our Products</h3>
                        <h1 className='text-slate-800 font-bold sm:text-md md:text-3xl lg:text-3xl pt-2'>Explore Our Products</h1>
                    </div>
                    


                    {/* navigation */}
                    <div className='flex gap-4'>
                        <div className='w-[46px] h-[46px] bg-neutral-100 rounded-full flex justify-center items-center cursor-pointer'>
                            <FaArrowLeftLong className='text-black' />

                        </div>

                        <div className='w-[46px] h-[46px] bg-neutral-100 rounded-full flex justify-center items-center cursor-pointer'>
                            <FaArrowRightLong className='text-black' />

                        </div>
                    </div>
                </div>
                <div>
                  <Eproducts/>
                </div>

                
            </div>
        </div>
    )
}

