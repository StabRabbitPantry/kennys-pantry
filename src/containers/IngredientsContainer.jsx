import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { create_list } from '../reducers/recipeListSlice';

const IngredientsContainer = () => {
  const dispatch = useDispatch();

  const getRecipeList = () => {
    const test = 'potato';
    fetch('/api/get?ingredient=' + test, {
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const recipeList = data;

        console.log(recipeList);
        dispatch(create_list(data));
      });
  };

  return (
    <div
      className='IngredientsContainer absolute bottom-9 left-24 m-6 p-2 '
      style={{ left: '135px' }}
    >
      <button type='button' onClick={getRecipeList}>
        Submit
      </button>
    </div>
  );
};

export default IngredientsContainer;
