import React from 'react'
import Card from './Card';


const Recipe = () => {
  const recipe = {
    id:"ffbdsjf",
    title:"Simple Omelette Recipe ",
    image:"https://images.unsplash.com/photo-1677844592730-ce9c936d8f1a?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDkxNDg1Mjh8&ixlib=rb-4.0.3&q=85",
    description:"An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked   to perfection, optionally filled with your choice of cheese, vegetables, or meats.",
    Ingredients:"2-3 large eggs,Salt, to taste , Pepper, to taste,1 tablespoon of butter or oil  Optional fillings: cheese, diced vegetables, cooked meats, herbs",
    Instructioons: "Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture  Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.Add fillings (optional): When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.Fold and serve: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.Enjoy: Serve hot, with additional salt and pepper if needed"
}

  return (
    <div >
      <h1 className='text-center' >Our Recipe</h1>
      <p className='ml-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea sed deleniti deserunt tempora, reprehenderit ullam nobis provident ab magnam earum, laudantium facilis voluptates, adipisci exercitationem molestias!</p>
      <div className='recipe-cards flex'>
        {recipe.length>0 ?(recipe.map((r)=>{
            <Card key={r.id} recipe={r}/>
        })):
        (
          <h1 className='w-full text-green-600 text-3xl font-extrabold text-center mt-10'>No Recipe Found</h1>
        ) }
        
      
      </div>
      <a
                    href="/create-recipe"
                    className="cursor-pointer text-black rounded-md absolute top-[15%] py-2 px-5 left-[10%]  bg-green-200 gap-x-3 flex items-center"
                >
                    <i className="text-3xl text-green-600 ri-add-box-line"></i>
                    Create Recipe
                </a>
          </div>
  )
}

export default Recipe;

