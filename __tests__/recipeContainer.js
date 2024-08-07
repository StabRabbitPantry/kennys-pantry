import React from 'react';
import { jest, describe, expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import RecipeContainer from '../src/Components/RecipeContainer';
import configureStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';


// const initialState = {
//     recipe: {
//         recipeName: ''
//         recipeLinkk: [
//             {recipeName: 'recipe 1', description: 'description 1', ingredients: ["egg", "mayo"], image: 'image1.png'},
//         ]
//     }
// }
const mockStore = configureStore([thunk]);

jest.mock('crypto.randomUUID', () => ({
  randomUUID: () => '123456789',
}));

describe('RecipeContainer', () => {
  test('rendering', () => {
    const store = mockStore({
      recipeList: {
        recipeList: [
          { recipeName: 'Recipe 1', description: 'description 1', ingredients: ['egg', 'mayo'] },
          { recipeName: 'Recipe 2', description: 'description 1', ingredients: ['egg', 'mayo'] },
        ],
      },
    });
        render(
            <Provider store={store}>
                <RecipeContainer />
            </Provider>
         )  
         expect(screen.getByText('Recipe1')).toBeInTheDocument();
    })
    
})
describe ('RecipeContainer Component Testing', () => {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    let store;
    let component;

    beforeEach(() => {
        component = render(<RecipeContainer />)
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('contains RecipeCards', () => {
        const recipeCard = component.getBy
    });
    test('click handler', () => {
        
    });
    test('contains FullRecipe', () => {
        
    });

})