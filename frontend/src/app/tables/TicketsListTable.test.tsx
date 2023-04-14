import React from 'react';
import { render, screen } from '@testing-library/react';
import { TicketsListTable } from './TicketsListTable';
import { TicketWithId } from '../../data/models/Ticket';

const mockItems: TicketWithId[] = [
    {
        id: 1,
        email: 'john@example.com',
        title: 'Sample Ticket 1',
        description: 'Description 1',
        price: 100,
        amount: 5,
        supplier: 'Supplier A',
    },
    {
        id: 2,
        email: 'jane@example.com',
        title: 'Sample Ticket 2',
        description: 'Description 2',
        price: 200,
        amount: 10,
        supplier: 'Supplier B',
    },
];

describe('TicketsListTable', () => {
    test('renders table header correctly', () => {
        render(<TicketsListTable items={[]} />);

        expect(screen.getByText('Email')).toBeInTheDocument();
        expect(screen.getByText('Title')).toBeInTheDocument();
        expect(screen.getByText('Description')).toBeInTheDocument();
        expect(screen.getByText('Price')).toBeInTheDocument();
        expect(screen.getByText('Amount')).toBeInTheDocument();
        expect(screen.getByText('Supplier')).toBeInTheDocument();
    });

    test('renders ticket data correctly', () => {
        render(<TicketsListTable items={mockItems} />);

        // Check first row data
        expect(screen.getByText('john@example.com')).toBeInTheDocument();
        expect(screen.getByText('Sample Ticket 1')).toBeInTheDocument();
        expect(screen.getByText('Description 1')).toBeInTheDocument();
        expect(screen.getByText('100')).toBeInTheDocument();
        expect(screen.getByText('5')).toBeInTheDocument();
        expect(screen.getByText('Supplier A')).toBeInTheDocument();

        // Check second row data
        expect(screen.getByText('jane@example.com')).toBeInTheDocument();
        expect(screen.getByText('Sample Ticket 2')).toBeInTheDocument();
        expect(screen.getByText('Description 2')).toBeInTheDocument();
        expect(screen.getByText('200')).toBeInTheDocument();
        expect(screen.getByText('10')).toBeInTheDocument();
        expect(screen.getByText('Supplier B')).toBeInTheDocument();
    });

    test('renders empty table when no items are provided', () => {
        render(<TicketsListTable items={[]} />);
        const rowGroups = screen.getAllByRole('rowgroup');
        const tableBody = rowGroups[1]; // The first one is <thead> and the second one is <tbody>
        expect(tableBody.childElementCount).toBe(0);
    });
});
