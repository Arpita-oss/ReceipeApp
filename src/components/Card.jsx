import React from 'react'
import '../index.css'

const Card = () => {
  return (
    <div className='flex justify-center items-center w-[350px] h-[550px] mt-[132px] ml-5 shadow-black'>
      <main className='shadow-black'>
  <div>
    <img src="https://images.unsplash.com/photo-1677844592730-ce9c936d8f1a?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDkxNDg1Mjh8&ixlib=rb-4.0.3&q=85" alt="omelette"/>
  </div>
  <section>
    <div>
      <h1 className='text-2xl'>Simple Omelette Recipe</h1>
      <p> An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
        to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
    </div>
    <div class="preparation-time">
      <h2>Preparation time</h2>
      <ul>
        <li><span>Total: </span>Approximately 10 minutes</li>
        <li><span>Preparation: </span>5 minutes</li>
        <li><span>Cooking: </span>5 minutes</li>
      </ul>
    </div>
  </section>
  
  
</main>

    </div>
  )
}

export default Card
