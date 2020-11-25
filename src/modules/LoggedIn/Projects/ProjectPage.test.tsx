import React from 'react';
import { render } from '@testing-library/react';
import ProjectPage from "./ProjectPage";

Object.defineProperty(window, 'matchMedia', {
    value: () => {
        return {
            matches: false,
            addListener: () => { },
            removeListener: () => { }
        };
    }
})

test('renders project page', () => {
    const { getByText } = render(<ProjectPage />);
    const linkElement = getByText("NAVA STORE");
    expect(linkElement).toBeInTheDocument();
});