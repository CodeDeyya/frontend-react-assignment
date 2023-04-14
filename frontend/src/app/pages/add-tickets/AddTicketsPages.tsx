import React from 'react';
import { Paper, createStyles, Center } from '@mantine/core';
import { AddTicketsForm } from '../../forms/AddTicketsForm';
import { colors } from '../../constants/colors';
import { TicketWithoutId } from '../../../data/models/Ticket';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { createTicket } from '../../store/ticketsSlice';

const useStyles = createStyles((theme) => ({
    formContainer: {
        width: 500,
        minHeight: 500,
    },
    header: {
        marginTop: 0,
        textAlign: 'center',
        color: colors.blue,
    },
}));

export const AddTicketsPage = () => {
    const { classes } = useStyles();
    const dispatch = useDispatch<AppDispatch>();

    const onFormSubmit = (values: TicketWithoutId) => {
        dispatch(createTicket(values));
    };

    return (
        <>
            <Center>
                <Paper p="xl" shadow="md" className={classes.formContainer}>
                    <h3 className={classes.header}>Add Tickets</h3>
                    <AddTicketsForm onSubmit={onFormSubmit} />
                </Paper>
            </Center>
        </>
    );
};
