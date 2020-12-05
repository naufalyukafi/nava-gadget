import React from 'react';
import { render } from '@testing-library/react';
import NewCardList from "./NewCardList"

Object.defineProperty(window, 'matchMedia', {
    value: () => {
        return {
            matches: false,
            addListener: () => { },
            removeListener: () => { }
        };
    }
})

test('renders new card list', () => {
    render(<NewCardList />);
});