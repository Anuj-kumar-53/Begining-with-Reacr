import React from 'react'
import {
    FaInstagram, 
    FaWhatsapp,
    FaFacebook,
    FaTwitter,
    FaYoutube,
    FaLinkedin,


}from 'react-icons/fa'
function Fotter() {
  return (
    <div className='bg-black '>

    <div className='max-w-[1240px] mx-auto py-16 px-4 grid md:grid-cols-2 lg:grid-cols-3 text-gray-300'>
        <div>

        <h1 className='text-xl font-extrabold text-green-400 '>First Project</h1>
        <p className='py-4'>Life is what happens to us while we are making other plans. Life isn't about finding yourself. Life is about creating yourself.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaLinkedin className=''  size={30}/>
            <FaFacebook className='' size={30}/>
            <FaInstagram className='' size={30}/>
            <FaTwitter className='' size={30}/>
            <FaYoutube className='' size={30}/>
            <FaWhatsapp className='' size={30}/>

        </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Analysis</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insights</li>
                    
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>Pricing</li>
                    <li className='py-2 text-sm'>Documentation</li>
                    <li className='py-2 text-sm'>Guides</li>
                    <li className='py-2 text-sm'>Api Status</li>
                    
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Blogs</li>
                    <li className='py-2 text-sm'>Jobs</li>
                    <li className='py-2 text-sm'>Careers</li>
                    <li className='py-2 text-sm'>Press</li>
                    
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'>Claim</li>
                    <li className='py-2 text-sm'>Policy</li>
                    <li className='py-2 text-sm'>terms</li>
               
                    
                </ul>
            </div>

        </div>

    </div>
    </div>
  )
}

export default Fotter