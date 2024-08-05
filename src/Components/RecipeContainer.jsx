import RecipeCard from './RecipeCard';
import FullRecipe from './FullRecipe';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const RecipeContainer = () => {
  const [bool, setBool] = useState(false);
  const clickHandler = () => {
    setBool(true);
  };
  const recipes = useSelector((state) => state.recipeList);

  return (
    <div
      className='absolute top-20 w-full h-full flex items-center'
      style={{ left: '550px' }}
    >
      <div className='border-4 border-green rounded-lg w-2/3 h-2/3 bg-opacity-50 bg-white shadow-xl'>
        <div className='flex items-start justify-center h-full p-4'>
          <h1 className='text-5xl font-bold mb-4 text-brown'>Recipes</h1>
          {/* map through the returned recipes and for each recipe we inject the info to the card */}
          <RecipeCard
            bool={bool}
            setBool={setBool}
            clickHandler={clickHandler}
          />
          <FullRecipe
            bool={bool}
            setBool={setBool}
            clickHandler={clickHandler}
          />
          ;
        </div>
      </div>
    </div>
  );
};

export default RecipeContainer;
