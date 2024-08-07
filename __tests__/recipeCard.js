import react from 'react';
import RecipeCard from "../src/Components/RecipeCard";
import { jest } from '@jest/globals'; 
import '@testing-library/jest-dom';
import { userEffect } from '@testing-library/user-event';
import { render, screen, fireEvent } from '@testing-library/react';


describe('recipe card component', (props ={}) => {
    const renderRecipeCard = (props ={}) => {
        const defaultRecipe = {
            title: 'Your mom',
            description: 'Your Dad',
            ingredients: ["ing1", "ing2"],
            image: "sample.png",
        }
        return render(<RecipeCard recipe={{...defaultRecipe, ...props.recipe}} clickHandler={props.clickHandler}/>) 
    }
  let component;
  

  beforeEach(() => {
    props = {
      recipe: {
        recipeName: 'your mom',
        imageLink: 'butterchicken.png',
      }
    }
    component = render(<RecipeCard {...props} />)
  });

  test('renders header with recipe name', () => {
    expect(component.getByText(props.recipe.recipeName)).toBeTruthy();
  })

  test('picks up image link', () => {
    const image = component.getByRole('img');
    expect(image).toHaveAttribute('src', props.recipe.imageLink);
  })

  test ('Should mtch snapshot', () => {
    const { asFragment } = renderRecipeCard();
    expect(asFragment()).toMatchSnapshot();
})
})