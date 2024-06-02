import React, { useContext, useState } from 'react';
import { recipecontext } from '../contexts/RecipeContext';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

const Create = () => {
  const navigate = useNavigate();
  
  const [recipes,setRecipes] = useContext(recipecontext)
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: nanoid(),
      image,
      title,
      description,
      instructions,
      ingredients,
    };

    setRecipes([...recipes, newRecipe]);
    toast.success("Recipe Created Successfully",
    {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }
    )
    navigate("/recipes");
  };

  return (
    <div>
      <form onSubmit={submitHandler} className='w-[70%] m-auto pb-5'>
        <h1 className='text-7xl mt-5 font-extrabold text-green-600 mb-[5%]'>Create <br /> New Recipe</h1>
        <input
          onChange={(e) => setImage(e.target.value)}
          className='w-full border rounded-md px-6 py-3 text-lg mb-5'
          type="url"
          value={image}
          placeholder='Type Image Url..'
        />
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className='w-full border rounded-md px-6 py-3 text-lg mb-5'
          type="text"
          placeholder='Recipe Name'
        />
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className='w-full border rounded-md px-6 py-3 text-lg mb-5'
          placeholder="Recipe Description Here.."
        ></textarea>
        <textarea
          onChange={(e) => setIngredients(e.target.value)}
          value={ingredients}
          className='w-full border rounded-md px-6 py-3 text-lg mb-5'
          placeholder="Recipe ingredients -> 'use comma to separate ingredients...'"
        ></textarea>
        <textarea
          onChange={(e) => setInstructions(e.target.value)}
          value={instructions}
          className='w-full border rounded-md px-6 py-3 text-lg mb-5'
          placeholder="Recipe instructions -> 'use comma to separate instructions...'"
        ></textarea>

        <div className="w-full text-right">
          <button className="rounded-md text-xl bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
            Publish Recipe &nbsp; &#8594;
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
