import React from 'react';
// import '../recipeCard.css';
import '../App.jsx';
// const recipeName = useSelector((state) => state.recipe.name);
//recipe funtionality needed. I don't understand redux toolkit. Need a function to interate through ingredients to make a list? Or maybe in just one chunk
//make recipe card
const FullRecipe = ({ bool, setBool }) => {
  return bool ? (
    <div className='fixed inset-0 flex items-center justify-center bg-gray-800 p-1'>
      <div
        className='relative bg-green hover:bg-light-green rounded-lg shadow-lg'
        style={{ width: '800px', height: '500px' }}
      >
        <h1 className='p-4 text-center'>The Food</h1>
        <button
          className='absolute top-2 right-2 text-gray-500 hover:text-gray-700 border-none'
          onClick={() => setBool(false)}
        >
          X
        </button>
        <div className='shadow-lg'></div>
        {/* <img
          src={}
          className="w-10/12 h-400 my-2 object-cover mx-auto rounded shadow-lg"
          alt="A picture of a cake"
        /> */}
        <div className='py-8 text-center'>
          <h3 className='text-dark-maroon text-xl font-bowlby-one dynamic-text w-10/12 mx-auto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            praesentium dolor maiores at enim omnis ipsam hic iusto eaque,
            consequuntur deleniti libero sint cumque reprehenderit nulla
            obcaecati exercitationem illo animi.
          </h3>
        </div>
      </div>
    </div>
  ) : null;
};
export default FullRecipe;
