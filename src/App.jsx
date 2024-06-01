import React from 'react';
import Nav from './components/Nav';
import Receipe from './components/Receipe';
import Card from './components/Card';

const App = () => {
  return (
    <div>
      <Nav/>
      <div className='h-[70vh] w-full flex justify-between items-center '>
        <img className='w-[550px] h-[250px] ml-10' src="https://imgs.search.brave.com/h1CrC85JklTCjl59rXCZnDpEmEEt77DTNGoQNISQmRw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/My9Gb29kLVBORy1Q/aWN0dXJlLnBuZw" alt="" />
        <div >
        <h1 className='text-xxl font-sans text-green-500 text-5xl font-bold ml-[0px] mb-8 mr-10'>
          Welcome to your most visited site!</h1>
        <p className='ml-[127px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  
          <br />
           Temporibus voluptas, cum quia expedita qui deserunt magni voluptatum 
           <br />
           illo incidunt omnis laudantium quibusdam dignissimos quam obcaecati hic
           <br />
            reprehenderit delectus nesciunt earum.</p>
            <button className='bg-green-500 w-[92px] mt-5 text-white rounded ml-[122px]'>Get Started</button>
       
        </div>
         </div>
         <div>
          <Receipe/>
          <Card/>
         </div>
         
          </div>
  );
};

export default App;
