import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PostTicketsRequest, TicketWithId, TicketWithoutId } from '../../data/models/Ticket';
import axios from 'axios';
import { RootState } from './store';

interface TicketState {
    //to store the fetched tickets
    tickets: TicketWithId[];
    //to store the error and loading when creating a ticket
    createError: string;
    createLoading: boolean;
    //to store the error and loading when fetching tickets
    fetchError: string;
    fetchLoading: boolean;
}

const initialState: TicketState = {
    // implement the initial state
    tickets: [],
    createError: '',
    createLoading: false,
    fetchError: '',
    fetchLoading: false,
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
        setFetchError: (state, action) => {
            state.fetchError = action.payload;
        },
        setCreateError: (state, action) => {
            state.createError = action.payload;
        },
        setCreateLoading: (state, action) => {
            state.createLoading = action.payload;
        },
        setFetchLoading: (state, action) => {
            state.fetchLoading = action.payload;
        },
        addTicket: (state, action) => {
            state.tickets.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed

        // fetch ticket success
        builder.addCase(fetchTickets.fulfilled, (state, action) => {
            state.tickets = action.payload;
            state.fetchLoading = false;
        });

        //fetch ticket error
        builder.addCase(fetchTickets.rejected, (state, action) => {
            state.fetchError = action.error.message || 'Something went wrong';
            state.fetchLoading = false;
        });

        //fetch ticket loading
        builder.addCase(fetchTickets.pending, (state, action) => {
            state.fetchLoading = true;
            state.fetchError = '';
        });

        // create ticket success
        builder.addCase(createTicket.fulfilled, (state, action) => {
            state.createLoading = false;
        });

        // create ticket error
        builder.addCase(createTicket.rejected, (state, action) => {
            state.createError = action.error.message || 'Something went wrong';
            state.createLoading = false;
        });

        // create ticket loading
        builder.addCase(createTicket.pending, (state, action) => {
            state.createLoading = true;
            state.createError = '';
        });
    },
});

// Action creators are generated for each case reducer function
export const { setFetchError, setCreateError } = ticketsSlice.actions;
export const getTickets = (state: RootState) => state.tickets.tickets;
export default ticketsSlice.reducer;
