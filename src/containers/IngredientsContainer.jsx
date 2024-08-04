import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createlist } from "../reducers/recipeListSlice";
import IngredientChoice from '../components/IngredientChoice';

const IngredientsContainer = () => {
  const [selectedIngredient, setSelectedIngredientState] = useState("");
  const dispatch = useDispatch();

  const getRecipeList = async () => {
    const URL = `/api/get?ingredient= ${selectedIngredient}`
    try{
        const response = await fetch(URL)
        const recipeList = await response.json()
        // console.log(recipeList)
        dispatch(createlist(recipeList));
        return
    } catch(error){
        throw new Error(error)
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

  const ingredientChoiceList = ["potato", "egg", "bacon", "flour", "garlic"];

  return (
    <div className='IngredientsContainer'>
      <form onSubmit={handleSubmit}>
        {ingredientChoiceList.map((choice, index) => (
          <IngredientChoice 
            id={"option" + index} 
            key={index}
            choice={choice}
            value={choice} 
            selectedIngredient={selectedIngredient}
            setSelectedIngredientState={setSelectedIngredientState}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default IngredientsContainer;