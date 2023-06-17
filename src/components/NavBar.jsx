import React, { useState } from 'react'
import HeroLogo from '../Assets/icon/hero-logo.png'
import { Link, Route, Routes } from 'react-router-dom'
import { FaBars, FaPlane, FaUser } from 'react-icons/fa';
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsAirplane } from "react-icons/bs";
import $ from 'jquery'


const NavBar = () => {
    const [menu, setMenu] = useState(false)
        let menuChosen = () => {
            setMenu(!menu)
            $('.introCont, .main').toggleClass('hidden')
 
        }

  return (
    <>
    <div className=' max-md:hidden navBar'>
        <img src={HeroLogo} alt="aircraft img" className='flyLeft'/>
        <Link to='/'>Home</Link>
        <Link to='/flight'>Check Flights</Link>
        <Link to='/about'>About</Link>
    </div>

    <div className='md:hidden'>
    <FaBars size={30} className='menu absolute right-3 top-3 z-50 text-black/75 cursor-pointer ' onClick={menuChosen} />
    {
        menu ? (
            <div className='gradualAnimeIn fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 gap-3'>

            <Link to='/' onClick={menuChosen} className='flex items-center justify-center rounded-xl bg-white shadow-md shadow-black/30 px-16 hover:scale-110 ease-in-out duration-150'>
                <AiOutlineHome/>
                <span className='p-2'>Home</span>
                </Link>

                <Link to='/flight' onClick={menuChosen} className='flex items-center justify-center rounded-xl  bg-white shadow-md shadow-black/30 px-16 hover:scale-110 ease-in-out duration-150'>
                <BsAirplane/>
                <span className='p-2'>Flight</span>
                </Link>

                <Link to='/about' onClick={menuChosen} className='flex items-center justify-center rounded-xl  bg-white shadow-md shadow-black/30 px-16 hover:scale-110 ease-in-out duration-150'>
                <AiOutlineUser/>
                <span className='p-2'>About</span>
                </Link>
            </div>
        )
        : (
            <div className='gradualAnimeOut'></div>
        )
    }
    </div>
    </>
  )
}

export default NavBar
