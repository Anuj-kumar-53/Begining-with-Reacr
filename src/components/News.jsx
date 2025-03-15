import React from 'react'

function News() {
  return (
    <div className='w-full py-16 text-white bg-black'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 px-4'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-5xl sm:text-4xl text-xl mb-2 mt-6'>Want tips & optimize your flow?</h1>
                <p>Sign up to our newletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full '>
                    <input className='p-3 w-full rounded-md text-black text-black bg-white mr-2' type="email" placeholder='Enter Email'/>
                    <button className='hover:bg-green-500 border bg-green-400 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-gray-100'>Notify Me</button>
                </div>
                <p>We care about the protection of yr data. Read our <span className='text-green-400'>Privacy Policy </span></p>
            </div>
        </div> 

    </div>
  )
}

export default News