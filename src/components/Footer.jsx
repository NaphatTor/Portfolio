import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

const currentYear = new Date().getFullYear();

const Footer = () => (
  <div className='fixed filter drop-shadow bottom-0 bg-white text-black font-mono w-full p-2 z-50 text-sm sm:text-base'>
    <div className='flex justify-between items-center flex-col sm:flex-row'>
      <div className='flex items-center sm:mb-0'>
        <span className='mr-1'><FaRegCopyright /></span>
        <span className='ml-2'>2023 - {currentYear} All rights reserved</span>
      </div>
      <div className='flex items-center mt-2 sm:mt-0'>
        <span>Portfolio's Thanachai |</span>
        <span className='sm:ml-2'>Powered by</span>
        <span className='sm:ml-2 ml-2 text-xl'><TbBrandNextjs /></span>
        <span className='sm:ml-2 text-xl'><SiTailwindcss /></span>
      </div>
    </div>
  </div>
);

export default Footer;
