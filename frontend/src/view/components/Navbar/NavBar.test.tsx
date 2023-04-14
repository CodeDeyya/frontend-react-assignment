import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Navbar } from './Navbar';
import { colors } from '../../../app/constants/colors';

describe('Navbar', () => {
    test('renders the logo with alt text and links', () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        const logo = screen.getByAltText('Events travel logo');
        expect(logo).toBeInTheDocument();

        const homeLink = screen.getByText('Home');
        expect(homeLink).toBeInTheDocument();
        expect(homeLink.closest('a')).toHaveAttribute('href', '/');

        const ticketsLink = screen.getByText('Tickets');
        expect(ticketsLink).toBeInTheDocument();
        expect(ticketsLink.closest('a')).toHaveAttribute('href', '/my-tickets');
    });

    // ...
    test('applies custom className to the Navbar', () => {
        render(
            <MemoryRouter>
                <Navbar className="custom-class" />
            </MemoryRouter>
        );

        const navbar = screen.getByTestId('navbar-grid');
        expect(navbar).toHaveClass('custom-class');
    });

    test('applies Mantine styles to the Navbar', () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        const navbar = screen.getByTestId('navbar-grid');
        expect(navbar).toHaveStyle({
            backgroundColor: colors.blue,
            alignItems: 'center',
        });

        // This style depends on the theme.spacing.lg value
        // You can either extract the value from the theme, or you can simply test if paddingRight and paddingLeft are applied
        expect(window.getComputedStyle(navbar).getPropertyValue('padding-right')).not.toBe('');
        expect(window.getComputedStyle(navbar).getPropertyValue('padding-left')).not.toBe('');
    });
});
