import React from 'react'
import $ from 'jquery'
import {chosenStateHandler} from './prac.js'





  export function handleInputChange() {
    const value = $('#userInput').val().toUpperCase().trim()
    return value

  }

export const Flight = () => {

    return (
    <>
    <section className='flightPage heroFlight'>
       <main className="main">
                <div className="userInputHolder">
                <label className='text-center text-gray-800' htmlFor="input">Enter Flight Number</label>
                <input type="text" className='border-2 rounded border-y-black w-28 h-9 p-3 text-xl m-auto text-center' id='userInput' required autoComplete='off' placeholder='Type Here'/>
                <button type='submit' className='searchBtn w-24 m-auto h-8 rounded border-2 active:bg-green-600 active:text-white' id='searchBtn' onClick={chosenStateHandler}>Search</button>
                </div>
       </main>

       </section>
    </>
  )
}

