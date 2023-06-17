import React, {useState} from 'react'
import $, { valHooks } from 'jquery'
import {chosenStateHandler, resetClicked} from '../prac.js'
import infoIco from '../Assets/icon/info_ico.svg'


  export function handleInputChange() {
    const value = $('#userInput').val().toUpperCase().trim()
    return value

  }

export const Flight = () => {
  const [infoHover, setInfoHover] = useState('')

      const handleHover = () => {
    let val = `To find your ICAO number, google search your airlines ICAO code and then concatinate add your flight number. \n Ex: Turkish airlines ICAO code is 'THY' and if your flight number is '1211' then your serach will be 'THY1211' `
    const outPut = <p style={{whiteSpace: 'pre-line'}}>{val}</p>;
    setInfoHover(outPut);
    if ($('.bubbleInfo').has('hidden')) {
      $('.bubbleInfo').removeClass('hidden').addClass('slideDown').removeClass('slideUp')
    } 

  }
  const handelMouseLeave = () => {
    $('.bubbleInfo').removeClass('slideDown').addClass('slideUp')
        setTimeout(() => {
          $('.bubbleInfo').addClass('hidden')
        }, 200);
      }

    return (
    <>
    <section className='flightPage heroFlight'>
       <main className="main max-sm:w-full">
                <div className="userInputHolder">
                <label className='text-center text-gray-800 flex justify-center items-center' htmlFor="input">Enter Flight ICAO Number <button type='submit' id='info-btn' onTouchStart={handleHover} onTouchMoveCapture={handelMouseLeave} onMouseEnter={handleHover} onMouseLeave={handelMouseLeave}> 
                
                  <img src={infoIco} alt="info icon" className='w-6 ml-1 infoBtn' /></button></label>
                <input type="text" className='border-2 rounded w-28 h-9 p-3 text-xl m-auto text-center' id='userInput' required autoComplete='off' placeholder='UAE724'/>
                <button type='submit' className='searchBtn w-24 m-auto h-8 rounded border-2 active:bg-green-600 active:text-white' id='searchBtn' onClick={chosenStateHandler}>Search</button>
                <button type="submit" className='searchBtn w-24 m-auto h-8 rounded border-2 active:bg-red-600 active:text-white hidden' id='resetBtn' onClick={resetClicked}>Reset</button>
                </div>
                <div className='bubbleInfo bg-orange-700/80 p-4 text-white/80 text-center absolute left-1/2 -translate-x-1/2 top-[105%] w-11/12 hidden rounded-[20px]'><p>{infoHover}</p></div>
       </main>

       </section>
    </>
  )
}

