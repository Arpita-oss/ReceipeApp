import React, { useContext, useState } from 'react'

const Create = () => {
    const [image,setImage] = useState();
    const [title, setTitle] = useState();
    const [description , setDescription] = useState();
    const [Ingredient , setIngredients] = useState();
    const [Instruction , setInstructions] = useState();

    const SubmitHandler = (e)=>{
        e.preventDefault()
        const newrecipes = {
            id:nanoid(),
            image,
            title,
            description,
            Instruction,
            Ingredient
        };
    }

  return (
    <div>
      <form onSubmit={SubmitHandler} className='w-[70%] m-auto  pb-5'>
        <h1 className='text-7xl mt-5 font-extrabold text-green-600 mb-[5%]'>Create <br /> New Recipe</h1>
        <input className='w-full border rounded-md px-6 py-3 text-lg mb-5 ' type="url" placeholder='Type Image Url..' />
        <input className='w-full border rounded-md px-6 py-3 text-lg mb-5' type="text" placeholder='Recipe Name' />
        <textarea className='w-full border rounded-md px-6 py-3 text-lg mb-5' placeholder="Recipe Description Here.."></textarea>
        <textarea className='w-full border rounded-md px-6 py-3 text-lg mb-5' placeholder="Recipe ingredients -> 'use comma to seperate ingredients..."></textarea>
        <textarea className='w-full border rounded-md px-6 py-3 text-lg mb-5' placeholder="Recipe instructions -> 'use comma to seperate instructions..."></textarea>
      
      <div className="w-full text-right">
                <button className="rounded-md text-xl bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
                    Publish Recipe &nbsp; &#8594;
                </button>
            </div>
            </form>
    </div>
  )
}

export default Create
