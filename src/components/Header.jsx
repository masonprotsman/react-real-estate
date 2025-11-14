import React from 'react'
import Navbar from './Navbar';
import headerImg from '../assets/header_img.png';

const Header = () => {
  return (
    <header className="relative min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden" style={{ backgroundImage: `url(${headerImg})` }} id="Header">
      {/* decorative overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/35 pointer-events-none" aria-hidden="true" />
      <Navbar />
      <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white relative z-10'>
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explore homes that exceed your expectations</h2>
        <div className='space-x-6 mt-16'>
            <a href='#Projects' className='border border-white px-8 py-6 rounded'>Projects</a>
            <a href='#Contact' className='bg-blue-500 text-white px-8 py-6 rounded'>Contact Us</a>
        </div>
      </div>
    </header>
  )
}

export default Header;