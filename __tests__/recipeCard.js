import React from 'react';
import RecipeCard from "../src/Components/RecipeCard";
import { jest, describe, expect, test } from '@jest/globals'; 
import '@testing-library/jest-dom';
import { userEffect } from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import {userEvent} from '@testing-library/user-event';


describe('recipe card component', (props ={}) => {
    // const renderRecipeCard = (props ={}) => {
    //     const defaultRecipe = {
    //         title: 'Your mom',
    //         description: 'Your Dad',
    //         ingredients: ["ing1", "ing2"],
    //         image: "sample.png",
    //     }
    //     return render(<RecipeCard recipe={{...defaultRecipe, ...props.recipe}} clickHandler={props.clickHandler}/>) 
    // }
  let component;
  

  beforeEach(() => {
    props = {
      clickHandler: jest.fn(),
      recipe: {
        recipeName: 'your mom',
        imageLink: 'butterchicken.png',
        ingredients: ['Ing1', 'Ing2', 'Ing3']
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

  test('renders ingredients', () => {
    const ingredientCompiler = props.recipe.ingredients.join(', ');
    expect(component.getByText(ingredientCompiler)).toBeTruthy();
  })
  
  // Tests the form 'onClick' property
  test ('form submits on click', async () => {
    const form = component.getByRole('img');
    // const form = component.getByClass('cursor-pointer p-4')
    await userEvent.click(form);
    expect(props.clickHandler).toHaveBeenCalled();
  })
})