import React from "react";

const IngredientChoice = (props) => {

    const { choice, selectedIngredient, setSelectedIngredientState } = props

  const handleChecked = (event) => {
    setSelectedIngredientState(event.target.value);
  };

  return (
    <label>
      <input 
        type="radio" 
        value={choice} 
        name="ingredientChoice"
        checked={selectedIngredient === choice}
        onChange={handleChecked}
        />
        {choice}
    </label>
  );
};

export default IngredientChoice;