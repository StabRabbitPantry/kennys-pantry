import React from 'react';
// import '../recipeCard.css';
import '../App.jsx';
// const recipeName = useSelector((state) => state.recipe.name);
//recipe funtionality needed. I don't understand redux toolkit. Need a function to interate through ingredients to make a list? Or maybe in just one chunk
//make recipe card
const FullRecipe = ({ pic, bool, setBool, clickHandler }) => {
  return bool ? (
    <div className=' max-w-xl rounded overflow-hidden shadow-lg flex flex-col bg-green hover:bg-light-green scale-100 h-500px hover:scale-105 '>
      <button className='xBtn' onClick={() => setBool(false)}>
        {' '}
        X{' '}
      </button>
      <img
        src={pic}
        className='w-10/12 h-400 my-2 object-cover mx-auto rounded shadow-lg'
        alt='A picture of a cake'
      />
      <div className='py-8 text-center'>
        <h3 className='text-dark-maroon text-xl font-bowlby-one dynamic-text'>
          {/* {props.ingredients} */}
        </h3>
      </div>
    </div>
  ) : null;
};
export default FullRecipe;
