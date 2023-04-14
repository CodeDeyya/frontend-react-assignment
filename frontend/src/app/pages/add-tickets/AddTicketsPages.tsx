import React from 'react';
import { Paper, createStyles, Center } from '@mantine/core';
import { AddTicketsForm } from '../../forms/AddTicketsForm';
import { colors } from '../../constants/colors';
import { TicketWithoutId } from '../../../data/models/Ticket';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { createTicket, getCreateError, getCreateLoading } from '../../store/ticketsSlice';

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
    const loading = useSelector(getCreateLoading);
    const error = useSelector(getCreateError);
    const onFormSubmit = (values: TicketWithoutId) => {
        dispatch(createTicket(values));
    };

    return (
        <>
            <Center>
                <Paper p="xl" shadow="md" className={classes.formContainer}>
                    <h3 className={classes.header}>Add Tickets</h3>
                    <AddTicketsForm onSubmit={onFormSubmit} loading={loading} error={error} />
                </Paper>
            </Center>
        </>
    );
};
