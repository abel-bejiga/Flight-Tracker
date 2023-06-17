import React from 'react'
import { Link } from 'react-router-dom'
import BuyMeCofeeLogo from '../Assets/icon/buyMeCofee_logo.png'
import CoffeeMode from '../Assets/icon/sad-happy_web.webp'
import { CiMail } from "react-icons/ci";
import DevAnime from '../Assets/img/dev_anime.png'

const About = () => {
  return (
    <>
    <section className='bgHolder absolute top-3/4 max-sm:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
       <img src={DevAnime} alt="dev pic" className=' '/>
    </section>

    <div className=' w-3/4 max-w-[800px] backdrop-blur-sm  border-noneshadow-lg shadow-gray-700 text-justify m-auto border-2 p-3 absolute left-1/2 top-1/3 max-sm:top-1/2 bg-white/50  -translate-x-1/2 -translate-y-1/2'>
    <p>Welcome to my page! My name is Abel, I am a passionate software developer dedicated to delivering innovative and customized solutions for your business. With expertise in a wide range of technologies, I can bring your ideas to life, whether it's a web application, mobile app, or custom software solution. I follow industry best practices, ensuring secure and user-friendly software that exceeds expectations. Communication and collaboration are at the forefront of my approach, keeping you involved throughout the process. Let's work together to create powerful software solutions that drive your business forward. Contact me today for personalized software development services.</p>
        <div className='relative flex justify-end items-center gap-2 mt-3'>
            <a href="https://www.abelbejiga.com" target='__blank' className='bg-blue-400/75 p-2 rounded-md hover:bg-blue-500/80'>Check out my Portfolio</a>
            <a href="mailto:Contact@abelbejiga.com" ><CiMail className='hover:text-yellow-500' size={30}/></a></div>
        </div>

        <div className='absolute bottom-[10px]  left-1/2 -translate-x-1/2 '>
        <a href='https://bmc.link/abelbejiga' className='buyCoffee relative overflow-hidden flex items-center justify-center p-2 bg-blue-500/90 rounded-xl w-72 shadow-lg shadow-gray-800/70 hover:shadow-pink-800/70 transition ease-in-out duration-1000 max-sm:hover:w-[80vw] sm:hover:w-[500px] hover:pt-[102%]' >
        <p className='text-2xl text-white/70'>Buy me a cofee</p>
        <img className='w-10' src={BuyMeCofeeLogo} alt="Logo" />
        <img src={CoffeeMode} alt="smily anime" className='gif absolute top-0 w-full' />
        </a>
        </div>
    </>
  )
}

export default About
