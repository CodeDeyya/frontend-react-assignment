import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PostTicketsRequest, TicketWithId, TicketWithoutId } from '../../data/models/Ticket';
import axios from 'axios';
import { RootState } from './store';

interface TicketState {
    tickets: TicketWithId[];
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
    const tickets: TicketWithId[] = response.data.data;
    return tickets;
});

export const createTicket = createAsyncThunk(
    'tickets/create',
    async (ticket: TicketWithoutId, thunkAPI) => {
        const data: PostTicketsRequest = { ticket };
        const config = {
            method: 'post',
            url: '/tickets',
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(data),
        };
        await axios(config);
        return ticket;
    }
);

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
    },
});

// Action creators are generated for each case reducer function
export const { fn } = ticketsSlice.actions;
export const getTickets = (state: RootState) => state.tickets.tickets;
export default ticketsSlice.reducer;
