import React from 'react'

const Details = () => {
    const receipe = {
        id:"ffbdsjf",
        title:"Simple Omelette Recipe ",
        image:"https://images.unsplash.com/photo-1677844592730-ce9c936d8f1a?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDkxNDg1Mjh8&ixlib=rb-4.0.3&q=85",
        description:"An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked   to perfection, optionally filled with your choice of cheese, vegetables, or meats.",
        Ingredients:"2-3 large eggs,Salt, to taste , Pepper, to taste,1 tablespoon of butter or oil  Optional fillings: cheese, diced vegetables, cooked meats, herbs"
                                     
    }
  return (
    <div>
      <main>
  <div>
    <img src={receipe.image} alt="omelette"/>
  </div>
  <section>
    <div>
      <h1>{receipe.title}</h1>
      <p> {receipe.description}</p>
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
  <section className='desc w-[50%] px-[5%] py-[3%] overflow-auto'>
    <h2 className='text-3xl border-b border-green-600 text-green-600'>Ingredients</h2>
    <ul className='text-zinc-600 list-disc  p-3 '>
        {receipe.ingredients.split(",").map((d,i)=>{
            <li className="list-item text-sm  mb-2" key={i}>
            {d}
        </li>
        })}
     
    </ul>
  </section>

  <hr/>

  <section>
    <h2>Instructions</h2>
    <ol>
      <li><span>Beat the eggs: </span>In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.
        You can add a tablespoon of water or milk for a fluffier texture.</li>
      <li><span>Heat the pan: </span>Place a non-stick frying pan over medium heat and add butter or oil.</li>
      <li><span>Cook the omelette: </span>Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure
        the eggs evenly coat the surface.</li>
      <li><span>Add fillings (optional): </span>When the eggs begin to set at the edges but are still slightly runny in the
        middle, sprinkle your chosen fillings over one half of the omelette.</li>
      <li><span>Fold and serve: </span>As the omelette continues to cook, carefully lift one edge and fold it over the
        fillings. Let it cook for another minute, then slide it onto a plate.</li>
      <li><span>Enjoy: </span>Serve hot, with additional salt and pepper if needed.</li>
    </ol>
  </section>

  <hr/>

  <section>
    <h2>Nutrition</h2>
    <p>The table below shows nutritional values per serving without the additional fillings.</p>
    <table>
      <tr>
        <th>Calories</th>
        <td>277kcal</td>
      </tr>
      <tr>
        <th>Carbs</th>
        <td>0g</td>
      </tr>
      <tr>
        <th>Protein</th>
        <td>20g</td>
      </tr>
      <tr>
        <th>Fat</th>
        <td>22g</td>
      </tr>
    </table>
  </section>
</main>
    </div>
  )
}

export default Details
