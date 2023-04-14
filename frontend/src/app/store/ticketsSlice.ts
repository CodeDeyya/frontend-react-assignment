import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Ticket } from '../../data/models/Ticket';
import axios from 'axios';
import { RootState } from './store';

interface TicketState {
    tickets: Ticket[];
}

const initialState: TicketState = {
    // implement the initial state
    tickets: [],
};

export const fetchTickets = createAsyncThunk('tickets/fetch', async (thunkAPI) => {
    const config = {
        method: 'get',
        url: '/tickets',
    };
    const response = await axios(config);
    const tickets: Ticket[] = response.data.data;
    return tickets;
});

export const createTicket = createAsyncThunk('tickets/create', async (ticket: Ticket, thunkAPI) => {
    await fetch('http://localhost:5000/tickets', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ticket),
    });
    return ticket;
});

export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        fn: (state) => {
            // implement the reducers
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTickets.fulfilled, (state, action) => {
            state.tickets = action.payload;
        });
        builder.addCase(createTicket.fulfilled, (state, action) => {
            state.tickets.push(action.payload);
        });
    },
});

// Action creators are generated for each case reducer function
export const { fn } = ticketsSlice.actions;
export const getTickets = (state: RootState) => state.tickets.tickets;
export default ticketsSlice.reducer;
