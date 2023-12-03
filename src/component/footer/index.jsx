import React from 'react'
import './index.css';

// import {Icons} from './menus';
import {  IoLogoTwitter } from "react-icons/io5";
import {Instagram } from './socialIcones/Instagram';
import {Facebook} from'./socialIcones/facebook';
import { Twitter } from './socialIcones/twitter';
const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-black bg-opacity-50 py-7">
        <h2 className='lg:text-4x1 text-3x1 md:mb-0 mb-6 lg:leading-normal font[Poppins] md:w-2/5'><span className='text-yellow-500 font-bold'>QYRU </span> une expérience à ne pas manquer</h2>
      </div>
      <div className={"p-5"}>
        <input 
        type="text"
        placeholder='Enter your email' 
        className="sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none text-black"/>
        <button className='bg-black bg-yellow-500 hover:bg-yellow-700 duration-300 px-5 py-2.5 font[Poppins] rounded-md text-white md:w-auto w-full'>Newsletter</button>
      </div>
      <div className='update grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-sm pb-8 text-white'>  
        <span> @2023 QYRU. All rights reserved.</span>
        <span> Terms - Privacy Policy</span>
        <div className='sci text-teal-000'>
        <Facebook className='p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-x1 hover:text-gray-100 hover:bg-yellow-500 duration-300' />
        <Twitter className='p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-x1 hover:text-gray-100 hover:bg-yellow-500 duration-300'/>
        <Instagram className='p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-x1 hover:text-gray-100 hover:bg-yellow-500 duration-300'/>
        </div>
        </div>
      
    </footer>
  );
}

export default Footer