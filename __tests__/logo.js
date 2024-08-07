import React from 'react';
import { render } from '@testing-library/react';
import { jest } from '@jest/globals'; 
import '@testing-library/jest-dom';

import Logo from '../src/Components/Logo.jsx';

describe ('Testing of Logo.jsx rendering', () => {

    let component;

    beforeEach(() => {
        component = render(<Logo />);
    })
    
    // Works
    test('Testing for img', () => {
        expect(component.getByRole('img')).toBeInTheDocument();
    })
});