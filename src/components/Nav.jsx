import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='font-mono h-[10vh] w-full flex justify-center items-center'>
    <div className='flex gap-x-10 text-xs items-center font-mono'>
     
      <h1 className='font-sans text-xl cursor-pointer' >Home</h1>
      <h1 className='font-sans text-xl cursor-pointer'>About</h1>
      <h1 className='font-sans text-xl cursor-pointer'>Recipe</h1>
        <h1 className='font-sans text-xl cursor-pointer'>Contact</h1>      
      {/* <Link className=" hover:text-green-600 duration-500" to="/receipe">
      Receipes
      </Link>
      <Link className=" hover:text-green-600 duration-500" to="/about">
      About
      </Link>
      <Link className=" hover:text-green-600 duration-500" to="/contact">
      Contact
      </Link> */}
    </div>
    </nav>

  )
}

export default Nav
