import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom';

const Card = (props) => {
  const {id,title,image,description,Ingredients,Instructions}={
    id:"ffbdsjf",
        title:"Simple Omelette Recipe ",
        image:"https://images.unsplash.com/photo-1677844592730-ce9c936d8f1a?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDkxNDg1Mjh8&ixlib=rb-4.0.3&q=85",
        description:"An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked   to perfection, optionally filled with your choice of cheese, vegetables, or meats.",
        Ingredients:"2-3 large eggs,Salt, to taste , Pepper, to taste,1 tablespoon of butter or oil  Optional fillings: cheese, diced vegetables, cooked meats, herbs",
        Instructions: "Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture  Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.Add fillings (optional): When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.Fold and serve: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.Enjoy: Serve hot, with additional salt and pepper if needed"
  };

  return (
    <Link to={`/recipes/1`} className='flex justify-center items-center w-[350px] h-[550px] mt-[132px] ml-5 shadow-black'>
      <main className='shadow-black'>
  <div>
    <img src="https://images.unsplash.com/photo-1677844592730-ce9c936d8f1a?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDkxNDg1Mjh8&ixlib=rb-4.0.3&q=85" alt="omelette"/>
  </div>
  <section>
    <div>
      <h1 className='text-2xl'>{title}</h1>
      <p>{description}
      </p></div>
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


    </Link>
  )
}

export default Card
