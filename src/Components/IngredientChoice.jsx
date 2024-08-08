import React from 'react';

const IngredientChoice = (props) => {
  const { choice, selectedIngredient, setSelectedIngredientState, className } =
    props;

  const handleChecked = (event) => {
    const ingredient = event.target.value;
    if (event.target.checked) {
      setSelectedIngredientState([...selectedIngredient, ingredient])
    } else {
      setSelectedIngredientState(selectedIngredient.filter(id => id !== ingredient))
    }
  };

  return (
    <div className={className}>
      <label>
        <input
          type='checkbox'
          value={choice}
          name='ingredientChoice'
          checked={selectedIngredient.includes(choice)}
          onChange={handleChecked}
        />
        {choice}
      </label>
    </div>
  );
};

export default IngredientChoice;
