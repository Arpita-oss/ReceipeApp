import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className=' h-[10vh] w-full flex justify-center items-center'>
    <div className='flex gap-x-10 text-md items-center '>
      {/* <Link className=" hover:text-green-600 duration-500" to="/home">
      Home
      </Link> */}
      <h1>Home</h1>
      <h1>About</h1>
      <h1>Receipe</h1>
        <h1>Contact</h1>      
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
