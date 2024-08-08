import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RecipeCard = ({ clickHandler, recipe, recipeName, imageLink, ingredients }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const id = user._id;
  // const [newFavourite, setNewFavourite] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/users/${id}`);
        if (!response.ok) {
          throw new Error('User not found');
        }
        const data = await response.json();
      } catch (err) {
        console.log(err);
      }
    };
    if (id) {
      fetchUser();
    }
  }, [id, dispatch]);

  const handleAddFavourite = async () => {
    // setNewFavourite(recipe.recipeName);
    try {
      const response = await fetch(`/api/users/favourites/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          card : {
            recipe: recipe.recipeName, 
            ingredients: capitalized, 
            image: recipe.imageLink,
            recipeUrl: recipe.url
          }
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to add favourite');
      }
      // setNewFavourite('');
    } catch (err) {
      console.log(err);
    }
  };

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

  return (
    <div className='max-w-xs rounded overflow-hidden shadow-lg flex flex-col bg-green hover:bg-light-green scale-100 h-500px hover:scale-105'>
      <button className='bg-green hover:bg-light-green self-end text-dark-maroon' onClick={handleAddFavourite} type="button" id={recipe.recipeName}>☆</button>
      <form onClick={clickHandler} className='cursor-pointer p-4'>
        <div className='py-8 text-center'>
          <h3 className='text-dark-maroon text-2xl font-bowlby-one dynamic-text'>{recipe.recipeName}</h3>
        </div>
        <img src={recipe.imageLink} className='w-11/12 h-48 my-2 object-cover mx-auto rounded shadow-lg' alt='A picture of a cake' />
        <h5 className='text-dark-maroon font-bowlby-one'>Ingredients:</h5>
        <p className='text-darker-maroon font-reenie-beanie text-xl font-bold'>{capitalized}</p>
      </form>
    </div>
  );
};

export default RecipeCard;

//http://localhost:8080/api/users/favourites/66b4ea017d4e70aae88b5225 << test POST request for DB favourites 

