import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Container, createStyles } from '@mantine/core';
import { Outlet } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
    navbar: {
        marginBottom: 40,
    },
}));

export const PageLayout: React.FC = () => {
    const { classes } = useStyles();
    return (
        <>
            <Navbar className={classes.navbar} />
            <Container>
                <Outlet />
            </Container>
        </>
    );
};
