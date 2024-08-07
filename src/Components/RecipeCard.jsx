import React from 'react';
// import '../recipeCard.css';
import '../App.jsx';

// const recipeName = useSelector((state) => state.recipe.name);
//make recipe card
const RecipeCard = ({ clickHandler, recipe }) => {
  //console.log(recipe.ingredients);
  const organizer = recipe.ingredients.join(', ');

  let flag = true;
  let capitalized = '';
  for (let element of organizer) {
    if (flag) {
      capitalized += element.toUpperCase();
      flag = false;
    } else if (element === ' ') {
      capitalized += element;
      flag = true;
    } else {
      capitalized += element;
    }
  }


  const handleSave = async (id) => {
    // onSave({...currentPAge,title,content});
    document.getElementById(id).innerHTML="★";
    await fetch(`/api/users/favorites`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ clickHandler: clickHandler, capitalized: capitalized, recipe : { recipeName: recipe.recipeName, imageLink: recipe.imageLink } })
    })
      if(response.ok) {
        const data = await response.json();
        console.log('Successful POST', data);
      }
    }
  //     .then(data => {
      
  //   // setTimeout(function(){
  //   //   document.getElementById(id).innerHTML="☆"}, 1000);
  // }
  
  //⭐⭐⭐⭐⭐⭐⭐⭐⭐🌟🌟🌟🌟🌟🌟🌟
  return (
    <div className=' max-w-xs rounded overflow-hidden shadow-lg flex flex-col bg-green hover:bg-light-green scale-100 h-500px hover:scale-105 '>
      <button className='bg-green hover:bg-light-green self-end text-dark-maroon' onClick={()=>handleSave(recipe.recipeName)} type="button" id={recipe.recipeName}>☆</button>
      <form onClick={clickHandler} className='cursor-pointer p-4'>
        <div className='py-8 text-center'>
          <h3 className='text-dark-maroon text-2xl font-bowlby-one dynamic-text'>
            {recipe.recipeName}
          </h3>
        </div>
        <img
          src={recipe.imageLink}
          className='w-11/12 h-48 my-2 object-cover mx-auto rounded shadow-lg'
          style={{ objectFit: 'cover', width: '100%' }}
          alt='A picture of a cake'
        />
        <h5 className='text-dark-maroon font-bowlby-one'>Ingredients:</h5>
        <p className='text-darker-maroon font-reenie-beanie text-xl font-bold'>
          {capitalized}
        </p>
      </form>
    </div>
  );
};
export default RecipeCard;
