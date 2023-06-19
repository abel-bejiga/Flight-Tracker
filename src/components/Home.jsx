import React, {useCallback, useEffect, useRef, useState} from 'react'

import { BsArrowRightSquare } from "react-icons/bs";
import { weatherCity, finalOut } from '../features';
import { RxDividerVertical } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import Loading from '../Assets/load.gif'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import $ from 'jquery'

const Home = () => {
    const [weatherClick, setWeatherClick] = useState(false)
    const [isClickedOutside, setIsClickedOutside] = useState(false)
    const targetElRef = useRef(null)

    const handleWeatherClick = useCallback(() => {
        setWeatherClick(prevWeatherClick => !prevWeatherClick)
    }, [])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (targetElRef.current && !targetElRef.current.contains(event.target)){
                setIsClickedOutside(true)
            } else {
                setIsClickedOutside(false)
            }
        }
        $(document).on('mousedown',handleClickOutside)
            return () => {
            $(document).off('mousedown',handleClickOutside)
            }
    }, []);

    useEffect(() => {
        if (isClickedOutside){
            handleWeatherClick()
        }
    }, [isClickedOutside, handleWeatherClick])


return (
    <>
        <section className='homePage heroHome'>
            <div className='introCont absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white/75 p-6 rounded-t-lg'>
                <h1 className=' text-5xl text-center'>Welcome to live Flight tracker</h1>
                    <div className='absolute top-full left-0 w-full  bg-white/75 rounded-b-lg flex items-center justify-evenly text-center gap-2'>
                        <Link to='/flight' className='w-full bg-white/90 py-1 px-2 shadow-sm shadow-black transition-all duration-500 rounded-bl-lg hover:bg-gray-700/20'>Track your flights</Link>
                        <div className='hover:cursor-pointer w-full bg-white/90 py-1 px-2 shadow-sm shadow-black transition-all rounded-br-lg duration-500 hover:bg-gray-700/20 ' onClick={handleWeatherClick}>Check the weather</div>
                    </div>

            </div>

    {
        weatherClick ?  (
            <motion.aside initial={{opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0}} transition={{ duration: 0.3}} className='weatherResExtend absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[60vh] max-h-[650px] bg-gray-700/60 backdrop-blur-lg rounded-xl min-w-[250px] max-w-[1200px]' ref={targetElRef}>
                <TfiClose size={30} className='absolute right-0 bg-white w-10 h-10 hover:cursor-pointer rounded-tr-xl p-1 transition-all duration-200 hover:bg-black hover:text-white active:p-2' onClick={handleWeatherClick}/>
                <div className="gradualAnimeIn weather absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" id='weather-click'>
                <div className="weather-input flex item-center gap-2 ">       
                    <input type="text" id="weather-city" placeholder="Type your City" min="2" max="30" required className='' autoComplete='off' />
                    <BsArrowRightSquare size={30} className='weather-btn hover:cursor-pointer text-white' id='weather-btn' onClick={finalOut}/>
                    

                </div>
                    <div className="loadContainer hidden">
                        <svg className="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
                            <circle cx="170" cy="170" r="160" stroke="#E2007C"/>
                            <circle cx="170" cy="170" r="135" stroke="#404041"/>
                            <circle cx="170" cy="170" r="110" stroke="#E2007C"/>
                            <circle cx="170" cy="170" r="85" stroke="#404041"/>
                        </svg>
                </div>
                    <p className='errorMessage m-auto text-lg hidden'><strong>Invalid City <span className='text-red-700'>!</span></strong></p>

                        <div className="weather-output hidden bg-white/70 p-4 rounded-lg  max-sm:w-52 w-60 place-content-center m-4 shadow-md shadow-black/50">
                            <div className="main-out">
                               <div className="emoji-cont text-center pb-3 text-5xl"><span id="status-icon"></span></div> 
                                <div className="c">
                                    <div className="weather-res hidden gap-1">
                                    <p id="temp" className='pr-1 text-center text-2xl text-black'></p>
                                    <div className="degreeBtns flex items-center pl-1 relative bottom-1">
                                        <button type='submit' className='degreeFaChosen rounded-sm hover:scale-95 text-black'>
                                        °<span className='degreeFaChosenSpan underline underline-offset-4'>F</span></button>
                                            <RxDividerVertical size={20}/>
                                        <button type='submit' className='degreeCeChosen rounded-sm hover:scale-95 text-gray-700 '>°<span className='degreeCeChosenSpan'>C</span></button>
                                        </div>
                                    </div>

                                    <p id="weather-cond-disc" className='text-black'></p>
                                </div>
                            </div>
                            <div className="change-city text-black border-2 w-fit py-1 px-2 rounded-md transition-all duration-300 hover:scale-[0.9] active:bg-pink-900 mt-2 hidden">
                                <button type="submit" id="change-city-btn ">Change City <i className="fa-solid fa-repeat"></i></button>
                            </div>
                        </div>
                        </div>
            </motion.aside>
        )
    : isClickedOutside ? (
        <div className='gradualAnimeOut' id='weather-click'></div>
    )
    : (
        <div className='gradualAnimeOut' id='weather-click'></div>
    )
}
        </section>

    </>

    )}

export default Home
