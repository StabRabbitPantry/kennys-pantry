import React from 'react';
// import '../recipeCard.css';
import '../App.jsx';

// const recipeName = useSelector((state) => state.recipe.name);
//make recipe card
const RecipeCard = ({ pic, bool, setBool, clickHandler }) => {
  return (
    <div className=' max-w-xs rounded overflow-hidden shadow-lg flex flex-col bg-green hover:bg-light-green scale-100 h-500px hover:scale-105 '>
      <form onClick={clickHandler} className='cursor-pointer p-4'>
        <img
          src={pic}
          className='w-11/12 h-48 my-2 object-cover mx-auto rounded shadow-lg'
          alt='A picture of a cake'
        />
        <div className='py-8 text-center'>
          <h3 className='text-dark-maroon text-xl font-bowlby-one dynamic-text'>
            {/* {props.name} */}
          </h3>
        </div>
      </form>
    </div>
  );
};
export default RecipeCard;
