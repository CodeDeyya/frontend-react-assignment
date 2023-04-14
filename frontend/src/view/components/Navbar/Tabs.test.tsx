import React from 'react';
import { render as rtlRender, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Tabs } from './Tabs';

// Mock the useGenericStyles hook
jest.mock('../../../app/styles/useGenericStyles', () => ({
    useGenericStyles: () => ({
        classes: {
            hoverable: 'hoverable',
        },
    }),
}));

function render({ route = '/active', ...renderOptions } = {}) {
    const TestComponent = () => (
        <MemoryRouter initialEntries={[route]}>
            <Tabs href="/active">Active Tab</Tabs>
            <Tabs href="/inactive">Inactive Tab</Tabs>
            <Routes>
                <Route path="/active" element={<div />} />
                <Route path="/inactive" element={<div />} />
            </Routes>
        </MemoryRouter>
    );

    return rtlRender(<TestComponent />, renderOptions);
}

describe('Tabs', () => {
    test('renders the correct classes for active and inactive tabs', () => {
        render();

        const activeTab = screen.getByText('Active Tab');
        const inactiveTab = screen.getByText('Inactive Tab');

        const activeTabClassName = activeTab.className;
        const inactiveTabClassName = inactiveTab.className;
        expect(activeTabClassName).toContain('hoverable');
        expect(inactiveTabClassName).toContain('hoverable');

        // The activeClassName property will set the active link class (React Router's NavLink)
        expect(activeTab.closest('a')).toHaveAttribute('aria-current', 'page');
    });
});
