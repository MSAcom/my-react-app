import React from 'react'
import './index.css';

import {Instagram } from './socialIcones/Instagram';
import {Facebook} from'./socialIcones/facebook';
import { Twitter } from './socialIcones/twitter';
const Footer = () => {
  return (
    <footer className="bg-black text-white">

      <div className="md:flex md:justify-center  bg-black py-7 mx-6">
        <h2 className='text-2xl font-bold mb-6 font[Poppins] '><span className='text-yellow-500 font-bold'>QYRU </span> une expérience à ne pas manquer</h2>
      </div>

      <div className={"p-5"}>
        <input 
        type="text"
        placeholder='Enter your email' 
        className="sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none text-black"/>
        <button className=' bg-yellow-500 hover:bg-yellow-700 duration-300 px-5 py-2.5 font[Poppins] rounded-md text-white md:w-auto w-full'>Newsletter</button>
      </div>

      <div className='update grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-sm pb-8 text-white'>  
        <span> @2023 QYRU. All rights reserved.</span>
        <span> Terms - Privacy Policy</span>

        <div className='sci text-teal-000'>
        <Facebook />
        <Twitter />
        <Instagram />
        </div>
      </div>
      
    </footer>
  );
}

export default Footer