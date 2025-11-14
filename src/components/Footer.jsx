import React from 'react'
import { assets } from '../assets/assets';

const Footer = () => {
    return (
        <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
                <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                    <img src={assets.logo_dark} alt="Logo" />
                    <p className='text-gray-400 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                    <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                    <ul className='flex flex-col gap-2 text-gray-400'>
                        <a className='hover:text-white' href="#Header">Home</a>
                        <a className='hover:text-white' href="#About">About Us</a>
                        <a className='hover:text-white' href="#Contact">Contact Us</a>
                        <a className='hover:text-white' href="#">Privacy Policy</a>

                    </ul>
                </div>
                <div className='w-full md:w-1/3'>
                    <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                    <p className='text-gray-400 mb-4 max-w-80'>The latest news, articles, and resources, sent to your inbox weekly</p>
                    <div className='flex gap-2'>
                        <input type="email" className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto' placeholder="Enter your email" />
                        <button className='py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-600'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
                Copyright © 2025 Mason Protsman Real Estate. All rights reserved.
            </div>
        </div>
    )
}

export default Footer
