import React from 'react';
import { render, screen } from '@testing-library/react';
import { FormLabel } from './FormLabel';

describe('FormLabel', () => {
    test('renders label with given children', () => {
        render(<FormLabel>Test Label</FormLabel>);

        const labelText = screen.getByText('Test Label');
        expect(labelText).toBeInTheDocument();
    });

    test('applies custom className to the label', () => {
        render(<FormLabel className="custom-class">Test Label</FormLabel>);

        const labelText = screen.getByText('Test Label');
        expect(labelText).toHaveClass('custom-class');
    });

    test('applies Mantine styles to the label', () => {
        render(<FormLabel>Test Label</FormLabel>);

        const labelText = screen.getByText('Test Label');
        expect(labelText).toHaveStyle({
            fontWeight: 'bold',
            fontSize: '.875rem',
        });

        // Check if marginBottom is not an empty string
        expect(window.getComputedStyle(labelText).getPropertyValue('margin-bottom')).not.toBe('');
    });
});
