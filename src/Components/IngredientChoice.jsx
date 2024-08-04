import React from 'react';

const IngredientChoice = (props) => {
  const { choice, selectedIngredient, setSelectedIngredientState, className } =
    props;

  const handleChecked = (event) => {
    setSelectedIngredientState(event.target.value);
  };

  return (
    <div className={className}>
      <label>
        <input
          type='radio'
          value={choice}
          name='ingredientChoice'
          checked={selectedIngredient === choice}
          onChange={handleChecked}
        />
        {choice}
      </label>
    </div>
  );
};

export default IngredientChoice;
