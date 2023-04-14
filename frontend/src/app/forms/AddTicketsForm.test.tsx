import React from 'react';
import { render, fireEvent, waitFor, screen, within } from '@testing-library/react';

import { AddTicketsForm } from './AddTicketsForm';
import '@testing-library/jest-dom/extend-expect';

const getInputByName = (name: string): HTMLInputElement => {
    const inputElements = [
        ...screen.getAllByRole('textbox'),
        ...screen.getAllByRole('spinbutton'),
    ] as HTMLInputElement[];

    const input = inputElements.find((element) => element.name === name);

    if (!input) {
        throw new Error(`Unable to find an input with the name of: ${name}`);
    }

    return input;
};
describe('AddTicketsForm', () => {
    const onSubmitMock = jest.fn();

    afterEach(() => {
        onSubmitMock.mockReset();
    });

    test('renders without crashing', () => {
        const { getByText } = render(<AddTicketsForm onSubmit={onSubmitMock} />);
        expect(getByText(/Add tickets/i)).toBeInTheDocument();
    });

    test('submits the form with valid data', async () => {
        const { getByText } = render(<AddTicketsForm onSubmit={onSubmitMock} />);

        fireEvent.input(getInputByName('email'), { target: { value: 'test@example.com' } });
        fireEvent.input(getInputByName('title'), { target: { value: 'Test Ticket' } });
        fireEvent.input(getInputByName('description'), {
            target: { value: 'A test ticket description' },
        });
        fireEvent.input(getInputByName('price'), { target: { value: '100' } });
        fireEvent.input(getInputByName('amount'), { target: { value: '5' } });
        fireEvent.input(getInputByName('supplier'), { target: { value: 'Test Supplier' } });

        fireEvent.click(getByText(/Add tickets/i));

        await waitFor(() => {
            expect(onSubmitMock).toHaveBeenCalled();
        });
    });

    test('shows error messages for invalid data', async () => {
        const { getByLabelText, getByText, findAllByText } = render(
            <AddTicketsForm onSubmit={onSubmitMock} />
        );

        fireEvent.input(getInputByName('email'), { target: { value: 'testexassmple.com' } });
        fireEvent.input(getInputByName('title'), { target: { value: 'Test Ticket' } });
        fireEvent.input(getInputByName('description'), {
            target: { value: 'A test ticket description' },
        });
        fireEvent.input(getInputByName('price'), { target: { value: '100' } });
        fireEvent.input(getInputByName('amount'), { target: { value: '5' } });
        fireEvent.input(getInputByName('supplier'), { target: { value: 'Test Supplier' } });
        fireEvent.click(getByText(/Add tickets/i));
        const errorMessages = await findAllByText(
            /(required|must be a valid email|must be greater than)/i
        );
        expect(errorMessages.length).toBeGreaterThan(0);
    });

    test('disables the Add tickets button when loading', () => {
        const { getByRole } = render(<AddTicketsForm onSubmit={onSubmitMock} loading={true} />);
        expect(getByRole('button', { name: /Add tickets/i })).toBeDisabled();
    });

    test('displays a global error message when an error is passed', () => {
        const { getByText } = render(
            <AddTicketsForm onSubmit={onSubmitMock} error={'got error'} />
        );
        expect(getByText(/Something went wrong!/i)).toBeInTheDocument();
    });
});
