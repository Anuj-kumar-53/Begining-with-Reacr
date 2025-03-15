import React from 'react'
import { ReactTyped } from "react-typed";
function Hero() {
  return (

      <div className='bg-gray-100'>
            <div className='max-w-[800px]  w-full mx-auto text-center flex flex-col h-screen'>
                <p className='text-green-400 font-bold p-2 mt-40'>Growing with fullStack in 2025</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with style</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast ,flexible sponsirships </p>
                    <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-400 pl-2' strings={['Just','my','error']} typeSpeed={150} backSpeed={180} loop/>
                </div>
                <p className='mt-4 md:text-2xl text-xl font-bold text-gray-400'>“The question isn't who is going to let me; it's who is going to <br/>stop me.” </p>
                <button className='hover:bg-green-500 border bg-green-400 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-gray-100'>Getting Started</button>
            </div>
      </div>
  )
}

export default Hero