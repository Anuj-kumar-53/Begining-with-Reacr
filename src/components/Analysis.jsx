import React from 'react'

function Analysis() {
  return (
    <div className='w-full bg-stone-200 py-16 px-4'>
        <div className='max-w[1240px] mx-auto grid md:grid-cols-2'>
            <img src="https://tailwindtoolbox.github.io/Landing-Page/hero.png" alt="" />

            <div className='text-black font-bold my-4 h-fit'>
                <p className='text-green-400 md:text-6xl text-2xl mt-15 mb-5'>Data Analysis Dashboard</p>
                <h1 className='text-black md:text-3xl text-xl font-extrabold my-2'>Manage Data Analytics Dynamically!</h1>
                <p className='text-lg'>Life is what happens to us while we are making other plans. Life isn't about finding yourself. Life is about creating yourself.</p>
        
                <p className='text-lg'>Success isn’t about how much money you make. It’s about the difference you make in people’s lives.</p>
                
                <p className='text-lg'>The best way to predict your future is to create it.</p>
                <button className='hover:bg-green-500 border bg-green-400 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-gray-100'>LET'S &nbsp;GO</button>
            </div>
        </div>

    </div>
   
  )
}

export default Analysis