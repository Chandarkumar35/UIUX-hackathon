import React from 'react'
import { FaInstagram, FaLinkedin, FaFacebook, FaXTwitter } from 'react-icons/fa6';
import { TiArrowRightThick } from "react-icons/ti";

export default function Footer() {
    return (
        <footer className='bg-black text-white pt-10 px-20 font-poppins'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-10'>
                    <div>
                        <h2 className='font-medium text-xl '>Exclusive</h2>
                        <p className='mt-4 text-zink-200 font-light'>Subscribe</p>
                        <p className='mt-2 text-zink-200 font-light'>Get 10% off your first order</p>
                        <div className='mt-4 relative border border-white rounded'>
                            <input type="email"
                                placeholder='Enter your email' className='bg-black text-white p-2 flex-grow outline-none row w-full' />
                            <button
                                type="submit"
                                className='absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-slate-800'>
                                <TiArrowRightThick />
                            </button>

                        </div>
                    </div>
                    {/* Supprort section */}
                    <div>
                        <h2 className=' font-medium text-xl'>Support</h2>
                        <p className='mt-4 text-zinc-200 font-light'> 111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                        <p className='mt-3 text-zinc-200 font-light'>exclusive@gmail.com</p>
                        <p className='mt-4 text-zinc-200 font-light'> +88015-88888-9999</p>
                    </div>
                    {/* account secontion */}
                    <div>
                        <h2 className=' font-medium text-xl'>Account</h2>
                        <ul className='mt-4 space-y-3 text-zinc-200 font-light'>
                            <li>My Account</li>
                            <li>Login/Register</li>
                            <li>Wishlist</li>
                            <li>Shop</li>
                        </ul>
                    </div>
                    {/* Quick Section */}
                    <div>
                        <h2 className=' font-medium text-xl'>Quick Link</h2>
                        <ul className='mt-4 space-y-3 text-zinc-200 font-light'>
                            <li>Privacy Policy</li>
                            <li>Term of use</li>
                            <li>FAQ</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    {/* download app */}
                    <div>
                        <h2 className='font-medium text-xl'>Download App</h2>
                        <p className='mt-4 text-zinc-200 font-light'>Save $3 with App New User Only</p>
                        <div className=' mt-4 flex items-center gap-2'>
                            <div className='w-[100px] h-[100px]'>
                                <img src="/qrcode.png" alt="qr code" className='w-full h-full object-contain' />
                            </div>
                            {/* Section */}
                            <div>
                                <img src="/play.png" alt="google play" className='w-36 h-12 object-contain' />
                                <img src="/apple.png" alt="apple" className='w-36 h-12 object-contain' />
                            </div>
                        </div>
                        {/* social medina*/}
                        <div className='flex space-x-4 mt-6'>
                            <a href="#" className='hover:text-gray-400'>
                                <FaFacebook size={24} /></a>
                            <a href="#" className='hover:text-gray-400'>
                                <FaXTwitter size={24} /></a>
                            <a href="#" className='hover:text-gray-400'>
                                <FaInstagram size={24} /></a>
                            <a href="#" className='hover:text-gray-400'>
                                <FaLinkedin size={24} /></a>

                        </div>

                    </div>
                </div>

                {/* footer bottom */}
                <div className='mt-10 text-center border-t border-zinc-800 text-zinc-600'>
                    <p className='py-6'>© Copyright Rimel 2022. All rights reserved</p>
                </div>



                {/*  End Supprort section */}


            </div>



        </footer>
    )
}
