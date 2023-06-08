import React from 'react'
import {searchClick} from './prac.js'


const Flight = () => {

  return (
    <>
    <section className='flightPage heroFlight'>
       <main className="main ">
                <label htmlFor="input">ARN(Aircraft Registration Number)</label>
                <div className="userInputHolder">
                <input type="text" className='input' id='userInput' required />
                <button type='submit' className='searchBtn' id='searchBtn' onClick={searchClick}>Search</button>
                </div>
       </main>
       </section>
    </>
  )
}

export default Flight
