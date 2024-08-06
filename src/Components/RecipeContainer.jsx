import RecipeCard from './RecipeCard';
import FullRecipe from './FullRecipe';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const RecipeContainer = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const clickHandler = (recipe) => {
    setSelectedRecipe(recipe);
  };
  const recipes = useSelector((state) => state.recipeList);
  //console.log(recipes.recipeList[0]);

  return (
    <div
      className='container mx-auto p-4 border-4 border-green rounded-lg bg-opacity-50 shadow-xl'
      style={{
        position: 'relative',
        top: '250px',
        minWidth: '900px',
        left: '100px',
      }}
      // className='absolute top-20 w-full h-full flex items-center'
      // style={{ left: '550px' }}
    >
      {/* <div className='border-4 border-green rounded-lg w-2/3 h-2/3 bg-opacity-50 bg-white shadow-xl'> */}
      <div className='flex flex-col items-center align-middle h-full p-4'>
        <h1 className='text-7xl font-bold mb-4 text-center text-dark-maroon font-playfair-display'>
          Recipes
        </h1>
        {/* map through the returned recipes and for each recipe we inject the info to the card */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg: grid-cols-4 gap-4'>
          {recipes.recipeList.map((recipe) => {
            return (
              <RecipeCard
                key={crypto.randomUUID()}
                recipe={recipe}
                clickHandler={() => clickHandler(recipe)}
              />
            );
          })}
        </div>
        <FullRecipe
          bool={!!selectedRecipe}
          setBool={() => setSelectedRecipe(null)}
          recipe={selectedRecipe}
        />
        ;{/* </div> */}
      </div>
    </div>
  );
};

export default RecipeContainer;
