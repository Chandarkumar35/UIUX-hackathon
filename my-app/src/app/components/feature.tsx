import React from 'react'
import Image from 'next/image'

export default function Feature() {
    return (
        <div className='w-full flex justify-center items-center pt-7'>
            <div className='w-[80%'>
                <div className='w-full'>
                    <h3 className='text-red-500 font-bold border-l-8 border-red-500 pl-3 ml-1'> Feature
                    </h3>
                    <h1 className='text-slate-800 font-bold sm:text-xl md:text-3xl lg:text-3xl pt-4'>New Arrival</h1>
                </div>




                {/* left containter */}
                <div className='flex sm:flex-col md:flex-row gap-x-8 gap-y-5 text-white pt-4'>
                    <div className='bg-black sm:w-full md:w-[50%] relative'>
                        <div className='absolute left-4 bottom-3 text-white'>
                            <h1 className='sm:text-lg font-bold md:text-xl'>Playstation</h1>
                            <p className='relative bottom-0 text-xs py-1'>Black and White version of the Ps5 is comming out on sale</p>
                            <button className='text-md font-sans underline underline-offset-8 hover:font-bold'>Show Now</button>

                        </div>
                        {/* image */}
                        <Image
                            src={"/playstation.png"}
                            alt='playstation'
                            width={500}
                            height={500}
                            className='w-full h-full object-cover rounded' />

                    </div>
                    {/* right  container  */}
                    <div className='flex flex-col gap-y-5'>
                        <div className='gb-black relative h-full'>
                            <div className='absolute left-4 bottom-3'>
                                <h1 className='sm:text-lg font-bold md:text-xl'>Wommen Collection</h1>
                                <p className='relative bottom-0 text-xs py-1'>Featured woman collections that give you another vibe.</p>
                                <button className='text-md font-sans underline underline-offset-8 hover:font-bold'>Show Now</button>
                            </div>
                            <Image
                                src={"/women.png"}
                                alt='women'
                                width={500}
                                height={500}
                                className='w-full h-full object-cover rounded' />
                        </div>
                        {/* Speaker */}
                        <div className='flex gap-x-5'>
                            <div className='bg-black relative flex justify-center items-center w-[50%] h-full'>
                                <div className='absolute left-4 bottom-3'>
                                    <h1 className='sm:text-sm font-bold md:text-2xl'>Speaker</h1>
                                    <p className='relative bottom-0 text-xs md:p-1'>Amazone wireless speaer</p>
                                    <button className='sm:text-sm md:text-md font-sans underline underline-offset-8 hover:font-bold'>Shop Now</button>
                                </div>
                                <Image
                                    src={"/echo.png"}
                                    alt='speaker'
                                    width={200}
                                    height={150}
                                    className='object-cover rounded' />
                            </div>

                            <div className='bg-black relative flex justify-center items-center w-[50%] h-full'>
                                <div className='absolute left-4 bottom-3'>
                                    <h1 className='sm:text-sm font-bold md:text-2xl'>Perfume</h1>
                                    <p className='relative bottom-0 text-xs md:p-1'>GUCCI INTENSE OUD EDP</p>
                                    <button className='sm:text-sm md:text-md font-sans underline underline-offset-8 hover:font-bold'>Shop Now</button>
                                </div>
                                <Image
                                    src={"/perfume.png"}
                                    alt='speaker'
                                    width={200}
                                    height={150}
                                    className='object-cover rounded' />
                            </div>

                        </div>

                    </div>

                </div>
               

            </div>

        </div>
    )
}
