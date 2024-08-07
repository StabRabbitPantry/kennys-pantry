import React, { useState } from 'react';
import { jest, describe, expect, test } from '@jest/globals';
import {userEvent} from '@testing-library/user-event';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

//import comopnents
import FullRecipe from '../src/Components/FullRecipe';
// import IngredientChoice from '../src/Components/IngredientChoice';
// import Logo from '../src/Components/Logo';
// import Navbar from '../src/Components/Navbar';
// import App from '../src/App';
// import RecipeCard from '../src/Components/RecipeCard';
// import RecipeContainer from '../src/Components/RecipeContainer';

// Mock Test
describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
    expect(1+2).not.toBe(4)
  });
});

// Testing the FullRecipe component in /src/Components/FullRecipe.jsx
describe('FullRecipe Component Testing', () => {
    // const setBoolClick = jest.fn()
    let component;
    
    const props = {
      bool: true,
      setBool: jest.fn(),
      recipe: {
        recipeName: 'Chocolate Cake',
        url: 'http://link.com',
        ingredientAmount: ['1']
      },
    }

    beforeEach(() => {
        component = render(<FullRecipe { ...props }/>)
    });
    
    // test('testing FullRecipe component', () => {
    //     expect(screen.getByRole('button')).toBeInTheDocument();
    //     expect(screen.getByRole('button')).toBeTruthy();
    //     const headings = screen.getAllByRole('heading');
    //     console.log(headings);
    //     expect(headings).toBeTruthy();
    //     expect(component.getByText('Chocolate Cake')).toBeTruthy();
    //     // expect(component.getByText('Chocolate Cake')).toBeInDocument();
    // })


    // Works
    test('testing render of the button', async () => {
        const button = component.getByRole('button', { name: 'X' });
        await userEvent.click(button);
        expect(screen.getByText('X')).toHaveAttribute('class', 'absolute top-2 right-2 text-gray-500 hover:text-gray-700 border-none');
    })

    // Works
    test('testing to see if the button has been clicked', async () => {
        const button = component.getByRole('button');
        await userEvent.click(button);
        expect(props.setBool).toHaveBeenCalled();
    })


    // Works
    test('testing to see if URL is present', () => {
      expect(component.getByText("Instructions Link: http://link.com")).toBeTruthy();
    })

    test('testing list item', () => {
      const listItem = component.getByText(props.recipe.ingredientAmount);
      expect(listItem).toBeTruthy();
    })
})

// XXX
// describe('IngredientChoice Component Testing', () => {
//     let component;
//     const props = {

//     };
    
//     beforeAll();
//     beforeEach();
//     test();

// })