import React, { useState } from 'react';
import { jest, describe, expect, test } from '@jest/globals';
import {userEvent} from '@testing-library/user-event';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import RecipeContainer from '../src/Components/RecipeContainer';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';

import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

const initialSTate = {
    recipeList: {
        recipeList: [
            {label: 'recipe 1', description: 'description 1', ingredients: ["egg", "mayo"], image: 'image1.png'},
        ]
    }
}


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