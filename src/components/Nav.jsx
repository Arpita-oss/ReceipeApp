import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='font-mono h-[10vh] w-full flex justify-center items-center mt-[-2%]'>
    <div className='flex gap-x-10 text-xs items-center font-mono'>
     
      <Link to={"/"} className='font-sans text-xl cursor-pointer hover:text-green-600 duration-200' >Home</Link >
      <Link to={"/about"} className='font-sans text-xl cursor-pointer hover:text-green-600 duration-200'>About</Link >
      <Link to={"/recipes"} className='font-sans text-xl cursor-pointer hover:text-green-600 duration-200'>Recipe</Link>
      
      <Link to={"/contact"} className='font-sans text-xl cursor-pointer hover:text-green-600 duration-200'>Contact</Link>
      
    </div>
    </nav>

  )
}

export default Nav
