import React, { useEffect } from 'react';
import { Paper, createStyles, Center } from '@mantine/core';
import { colors } from '../../constants/colors';
import { TicketsListTable } from '../../tables/TicketsListTable';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTickets } from '../../store/ticketsSlice';

const useStyles = createStyles((theme) => ({
    formContainer: {
        width: 850,
        minHeight: 500,
    },
    header: {
        marginTop: 0,
        textAlign: 'center',
        color: colors.blue,
    },
}));

export const TicketsListPage = () => {
    const { classes } = useStyles();
    const { tickets } = useSelector((state: RootState) => state.tickets);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchTickets());
    }, []);

    return (
        <>
            <Center>
                <Paper p="xl" shadow="md" className={classes.formContainer}>
                    <h3 className={classes.header}>Tickets list</h3>
                    <TicketsListTable items={tickets} />
                </Paper>
            </Center>
        </>
    );
};
