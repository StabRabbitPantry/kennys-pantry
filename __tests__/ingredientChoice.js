import React from 'react';
import { userEffect } from '@testing-library/user-event';
import { render, screen, fireEvent } from '@testing-library/react';
import IngredientChoice from '../src/Components/IngredientChoice';
import {userEvent} from '@testing-library/user-event';
import { jest } from '@jest/globals'; 
import '@testing-library/jest-dom';

describe('ingredient choice component', () => {
    let component;
    let props;

    beforeEach(() => {
      props = {
            selectedIngredient: 'Apples',
            onSelect: jest.fn(),
            choice: 'Apples',
            className: 'test-class'
        };
    component = render(<IngredientChoice { ...props }/>)
    });


    afterEach(()=> {
        jest.clearAllMocks();
    })
    //working
    test('renders ingredient choice label and input', () => {
        expect(screen.getByLabelText('Apples')).toBeInTheDocument();
        expect(screen.getByLabelText('Apples')).toHaveAttribute('type', 'radio');
      });
    //working
      test('radio button is checked when selectedIngredient matches choice', () => {
        expect(screen.getByLabelText('Apples')).toBeChecked();
      });

})