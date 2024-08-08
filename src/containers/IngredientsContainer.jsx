import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createlist } from '../reducers/recipeListSlice';
import IngredientChoice from '../Components/IngredientChoice';

const IngredientsContainer = () => {
  const [selectedIngredient, setSelectedIngredientState] = useState([]);
  const dispatch = useDispatch();

  const getRecipeList = async () => {
    const str = selectedIngredient.join('+');
    console.log(typeof str, 'this is our str type')
    const URL = `/api/get?ingredient=${str}`;
    try {
      const response = await fetch(URL);
      const recipeList = await response.json();
      //console.log(recipeList);
      dispatch(createlist(recipeList));
      return;
    } catch (error) {
      throw new Error(error);
    }
  };

  //   const getRecipeList = () => {

  //     const URL = `/api/get?ingredient= ${choiceIngredient}`

  //     const response = fetch(URL)
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       const recipeList = data;
  //       console.log(recipeList);
  //       dispatch(createlist(data));
  //     });
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();
    getRecipeList();
  };

  const ingredientChoiceList = [
    'Almonds',
    'Apples',
    'Avocado',
    'Bananas',
    'Basil',
    'Beef',
    'Bell Peppers',
    'Black Beans',
    'Blueberries',
    'Broccoli',
    'Butter',
    'Carrots',
    'Cauliflower',
    'Celery',
    'Cheese',
    'Chicken',
    'Cilantro',
    'Cinnamon',
    'Corn',
    'Cucumber',
    'Eggs',
    'Garlic',
    'Ginger',
    'Honey',
    'Kale',
    'Lemon',
    'Lettuce',
    'Lime',
    'Milk',
    'Mushrooms',
    'Oats',
    'Olive Oil',
    'Onions',
    'Oranges',
    'Parsley',
    'Pasta',
    'Peanut Butter',
    'Pineapple',
    'Potatoes',
    'Quinoa',
    'Rice',
    'Salmon',
    'Salt',
    'Spinach',
    'Strawberries',
    'Sweet Potatoes',
    'Tomatoes',
    'Turkey',
    'Yogurt',
    'Zucchini',
  ];

  return (
    <div
      className='IngredientsContainer absolute bottom-9 left-24 m-6 p-2 text-3xl'
      style={{ left: '135px', top: '250px' }}
    >
      <form className='justify-between' onSubmit={handleSubmit}>
        <div
          className='flex flex-col border-4 border-green p-20 rounded-lg shadow-xl'
          style={{ height: 'calc(100vh - 315px)' }}
        >
          <h2
            className='text-center text-dark-maroon text-3xl mb-8 font-bold font-playfair-display'
            style={{ marginTop: '-60px' }}
          >
            Ingredients
          </h2>
          <div
            className='overflow-y-auto bg-green border-light-green rounded-lg font-reenie-beanie text-4xl'
            style={{ maxHeight: '400px' }}
          >
            {ingredientChoiceList.map((choice, index) => (
              <IngredientChoice
                className='text-brown mb-10 '
                id={'option' + index}
                key={index}
                choice={choice}
                value={choice}
                selectedIngredient={selectedIngredient}
                setSelectedIngredientState={setSelectedIngredientState}
              />
            ))}
          </div>
          <div className='flex-grow'></div>
          <button
            className='text-2xl mt-8 text-green font-playfair-display bg-dark-maroon'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default IngredientsContainer;
