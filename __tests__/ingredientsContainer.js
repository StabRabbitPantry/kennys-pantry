import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import IngredientsContainer from '../src/containers/IngredientsContainer';

import '@testing-library/jest-dom';

const mockStore = configureStore([]);
describe('IngredientsContainer', () => {
  test('renders IngredientsContainer component with Apples and Almonds and THEN tests Apple Click', () => {
   const store = mockStore({
    ingredients: {
        list: ['Apples','Almonds'],
    },
   })
 render(
    <Provider store={store}>
        <IngredientsContainer />
    </Provider>
 )  
     
    expect(screen.getByText('Apples')).toBeInTheDocument();
    expect(screen.getByText('Almonds')).toBeInTheDocument();
    const ingredientChoice = screen.getByText('Apples');
    fireEvent.click(ingredientChoice);

    expect(screen.getByText('Apples')).toBeInTheDocument();
  });
  test('INGREDIENTS', ()=>{

    const store=mockStore({})
    render(
        <Provider store={store}>
            <IngredientsContainer />
        </Provider>
     )  
    const ingredients = [
        'Almonds', 'Apples', 'Avocado', 'Bananas', 'Basil', 'Beef', 'Bell Peppers',
        'Black Beans', 'Blueberries', 'Broccoli', 'Butter', 'Carrots', 'Cauliflower',
        'Celery', 'Cheese', 'Chicken', 'Cilantro', 'Cinnamon', 'Corn', 'Cucumber',
        'Eggs', 'Garlic', 'Ginger', 'Honey', 'Kale', 'Lemon', 'Lettuce', 'Lime',
        'Milk', 'Mushrooms', 'Oats', 'Olive Oil', 'Onions', 'Oranges', 'Parsley',
        'Pasta', 'Peanut Butter', 'Pineapple', 'Potatoes', 'Quinoa', 'Rice', 'Salmon',
        'Salt', 'Spinach', 'Strawberries', 'Sweet Potatoes', 'Tomatoes', 'Turkey',
        'Yogurt', 'Zucchini'
      ];
  
      ingredients.forEach(ingredient => {
        expect(screen.getByText(ingredient)).toBeInTheDocument();
      });
  })
});
