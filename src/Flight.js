import React from 'react'
import $, { valHooks } from 'jquery'
import {chosenStateHandler, resetClicked} from './prac.js'
import infoIco from './Assets/icon/info_ico.svg'




  export function handleInputChange() {
    const value = $('#userInput').val().toUpperCase().trim()
    return value

  }
  function infoClicked(){
    let val = `ICAO number = airlines ICAO code(which can be found on google) + your flight number(nospace). EX: Turkish airlines ICAO code is 'THY' and if your flight number is '1211' then your serach will be 'THY1211' `
    let valHolder =  $('<p></p>')
    valHolder.attr('class', 'valHolder')
    valHolder.text(val)
    $('.userInputHolder').append(valHolder)
  }
  function infoDisabled(){
    $('.valHolder').remove()
  }
  $('#info-btn').hover(function(){
    infoClicked()
    setTimeout(() => {
      infoDisabled()
    }, 5000);
  })

export const Flight = () => {

    return (
    <>
    <section className='flightPage heroFlight'>
       <main className="main">
                <div className="userInputHolder">
                <label className='text-center text-gray-800 flex justify-center items-center' htmlFor="input">Enter Flight ICAO Number <button type='submit' id='info-btn'><img src={infoIco} alt="info icon" className='w-6 ml-1 infoBtn' /></button></label>
                <input type="text" className='border-2 rounded w-28 h-9 p-3 text-xl m-auto text-center' id='userInput' required autoComplete='off' placeholder='UAE724'/>
                <button type='submit' className='searchBtn w-24 m-auto h-8 rounded border-2 active:bg-green-600 active:text-white' id='searchBtn' onClick={chosenStateHandler}>Search</button>
                <button type="submit" className='searchBtn w-24 m-auto h-8 rounded border-2 active:bg-red-600 active:text-white hidden' id='resetBtn' onClick={resetClicked}>Reset</button>
                </div>
       </main>

       </section>
    </>
  )
}

