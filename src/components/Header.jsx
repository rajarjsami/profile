import { TbFileCv } from 'react-icons/tb'
import { MdContactPhone, MdPrivacyTip } from 'react-icons/md'
import { FaFacebook, FaInfoCircle, FaInstagram, FaProductHunt, FaTwitter, FaYoutube } from 'react-icons/fa'
import { GoHomeFill } from 'react-icons/go'
import { PiDribbbleLogo } from 'react-icons/pi'
import { Link } from 'react-scroll';
import React,  { useState } from 'react'
import { GiSkills } from 'react-icons/gi'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
  
  const Header =  ({ onPolicyClick }) =>  {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
      <div className='top-header bg-blue-500 text-black p-3 flex justify-end '>
          {/* Logo */}
       <div className='logo w-[100px] mt-2 h-12 '>
          <PiDribbbleLogo className='text-[40px] text-white' />
        </div>
      <div className='flex justify-between items-center'>
       

        {/* Social Icons - Hidden on small screens */}
        <div className='hidden md:block ml-60'>
          <ul className='flex text-white text-[20px] ml-52'>
            <a href='#'><li className='mx-1'><FaFacebook /></li></a>
            <a href='#'><li className='mx-1'><FaYoutube /></li></a>
            <a href='#'><li className='mx-1'><FaTwitter /></li></a>
            <a href='#'><li className='mx-1'><FaInstagram /></li></a>
          </ul>
        </div>

        {/* Hamburger Icon */}
        <div className='md:hidden text-white text-3xl bg-slate-800 rounded-full p-2 ml-20 mb-52 float-left' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </div>
      </div>

      {/* Navigation Menu */}
      <div className={`nav mt-3 ${menuOpen ? 'block' : 'hidden'} md:block`}>
        <ul className='flex flex-col md:flex-row md:justify-end md:items-center text-white text-[18px]'>
          <li className='m-1 hover:bg-blue-400 hover:rounded-md hover:p-0.5'>
            <Link onClick={onPolicyClick} to="privacy" smooth={true} duration={500} offset={-80} className='cursor-pointer flex items-center'>
              <MdPrivacyTip className='ml-2 m-1 text-[20px]' /> Privacy Policy
            </Link>
          </li>
          <li className='m-1 hover:bg-blue-400 hover:rounded-md hover:p-0.5'>
            <Link to="skills" smooth={true} duration={500} offset={-80} className='cursor-pointer flex items-center'>
              <GiSkills className='ml-2 m-1 text-[20px]' /> Skills
            </Link>
          </li>
          <li className='m-1 hover:bg-blue-400 hover:rounded-md hover:p-0.5'>
            <a href="#cv" className='flex items-center'>
              <TbFileCv className='ml-2 m-1 text-[20px]' /> CV
            </a>
          </li>
          <li className='m-1 hover:bg-blue-400 hover:rounded-md hover:p-0.5'>
            <Link to="products" smooth={true} duration={500} offset={-80} className='cursor-pointer flex items-center'>
              <FaProductHunt className='ml-2 m-1 text-[20px]' /> Products
            </Link>
          </li>
          <li className='m-1 hover:bg-blue-400 hover:rounded-md hover:p-0.5'>
            <Link to="aboutus" smooth={true} duration={500} offset={-80} className='cursor-pointer flex items-center'>
              <FaInfoCircle className='ml-2 m-1 text-[20px]' /> About Us
            </Link>
          </li>
          <li className='m-1 hover:bg-blue-400 hover:rounded-md hover:p-0.5'>
            <Link to="contactus" smooth={true} duration={500} offset={-80} className='cursor-pointer flex items-center'>
              <MdContactPhone className='ml-2 m-1 text-[20px]' /> Contact Us
            </Link>
          </li>
          <li className='m-1 hover:bg-blue-400 hover:rounded-md hover:p-0.5'>
            <a href="/" className='flex items-center'>
              <GoHomeFill className='ml-2 m-1 text-[20px]' /> Home
            </a>
          </li>
        </ul>
      </div>
     
    </div>
  
    )
  }
  
  export default Header