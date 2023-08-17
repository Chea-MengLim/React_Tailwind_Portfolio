import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };



  return (
    <div className='fixed top-0 left-0 w-full bg-[#3b82f6] flex justify-between items-center h-17 md:h-20 max-w-full mx-auto px-4 md:px-10 lg:px-16 text-white'>
      <Link to="/" > <img className='opacity-[100%] h-20' src={require('../../img/logo2.png')} alt='logo'></img> </Link>
      <ul className='hidden lg:flex'>
        <NavLink  to="/"  className='font-Preahvihear cursor-pointer py-7 px-9 hover:text-red-600 duration-500'>Home</NavLink>
        <NavLink  to="/aboutMe"  className='font-Preahvihear cursor-pointer py-7 px-9 hover:text-red-600 duration-500'>About</NavLink>
        <NavLink  to="/skill"  className='font-Preahvihear cursor-pointer py-7 px-9 hover:text-red-600 duration-500'>Skills</NavLink>
        <NavLink  to="portfolio"  className='font-Preahvihear cursor-pointer py-7 px-9 hover:text-red-600 duration-500'>Portfolio</NavLink>
        <NavLink  to="contact"  className='font-Preahvihear cursor-pointer py-7 px-9 hover:text-red-600 duration-500'>Contact</NavLink>
        <NavLink  to="signIn"  className='font-Preahvihear cursor-pointer py-7 px-9 hover:text-red-600 duration-500'> <h1 className='flex items-center gap-1'><CgProfile size={20} /> Sign In  </h1> </NavLink>
      </ul>
      <div  onClick={handleNav} className='block lg:hidden'>
          {nav ? <AiOutlineClose color='red' size={30}/> : <AiOutlineMenu  size={30} />}
      </div>
      <ul className={nav ? ' flex flex-col fixed left-0 top-0 w-[60%] h-full  bg-[#3b82f6] ease-in-out duration-500' : ' ease-in-out  fixed left-[-150%]'}>
          <Link to="/" > <img className='opacity-[100%] h-20' src={require('../../img/logo2.png')} alt='logo'></img> </Link>
          <NavLink onClick={()=>{setNav(false)}}  to="/" className='font-Preahvihear cursor-pointer p-4 border-b border-[#334155]'>Home</NavLink>
          <NavLink onClick={()=>{setNav(false)}}  to="/aboutMe" className='font-Preahvihear cursor-pointer p-4 border-b border-[#334155]'>About</NavLink>
          <NavLink onClick={()=>{setNav(false)}}  to="/skill" className='font-Preahvihear cursor-pointer p-4 border-b border-[#334155]'>Skills</NavLink>
          <NavLink onClick={()=>{setNav(false)}}  to="/portfolio" className='font-Preahvihear cursor-pointer p-4 border-b border-[#334155]'>Portfolio</NavLink>
          <NavLink onClick={()=>{setNav(false)}}  to="/contact" className='font-Preahvihear cursor-pointer p-4 border-b border-[#334155]'>Contact</NavLink>
          <NavLink onClick={()=>{setNav(false)}}  to="signIn" className='font-Preahvihear cursor-pointer p-4'> <h1 className='flex gap-1 '> <CgProfile size={20} /> Sign in  </h1> </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;