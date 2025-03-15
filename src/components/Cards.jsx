import React from 'react'
import { FaPeopleLine } from "react-icons/fa6";
import { ImAirplane } from "react-icons/im";
import { IoBoat } from "react-icons/io5";
function Cards() {
  return (
    <div className='w-full py-[10rem] px-4 bg-gray-100'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3  gap-10'>
            <div className='  w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <FaPeopleLine className='w-20 mx-auto mt-[-3rem] bg-gray-100'/>
                <h2 className='text-2xl font-bold py-8 text-center'>Multiple User</h2>
                <p className='text-center text-4xl font-bold'>$999</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b border-gray-200 mx-8 mt-8'>500 Gb Storage</p>
                    <p className='py-2 border-b mx-8 border-gray-200'>Multiple Users</p>
                    <p className='py-2 border-b mx-8 border-gray-200'>12 Year Warranty</p>
                </div>
                <button className='hover:bg-green-500 border bg-green-400 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-gray-100'>Start Trail</button>
            </div>

            <div className='  w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
                <ImAirplane  className='w-20 mx-auto mt-[-3rem] bg-gray-100'/>
                <h2 className='text-2xl font-bold py-8 text-center'>My Flight</h2>
                <p className='text-center text-4xl font-bold'>$1119</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b border-gray-200 mx-8 mt-8'>Book Yr ticket now</p>
                    <p className='py-2 border-b mx-8 border-gray-200'>Free for Mens</p>
                    <p className='py-2 border-b mx-8 border-gray-200'>Safe Journey</p>
                </div>
                <button className='hover:bg-green-500 border bg-green-400 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-gray-100'>Start Trail</button>
            </div>

            <div className='  w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <IoBoat className='w-20 mx-auto mt-[-3rem] bg-gray-100'/>
                <h2 className='text-2xl font-bold py-8 text-center'>Black Pearl</h2>
                <p className='text-center text-4xl font-bold'>$909.99</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b border-gray-200 mx-8 mt-8'>Ride With Pirates</p>
                    <p className='py-2 border-b mx-8 border-gray-200'>Explore the Unseen's</p>
                    <p className='py-2 border-b mx-8 border-gray-200'>Ride at own risk</p>
                </div>
                <button className='hover:bg-green-500 border bg-green-400 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-gray-100'>Start Trail</button>
            </div>
           

        </div>

    </div>
  )
}

export default Cards