import React from 'react';
import { createStyles, Grid } from '@mantine/core';
import { ChildlessBaseComponent } from '../../../app/interfaces/BaseComponent';
import classNames from 'classnames';
import { Tabs } from './Tabs';
import { colors } from '../../../app/constants/colors';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
    navbarContainer: {
        backgroundColor: colors.blue,
        paddingRight: theme.spacing.lg,
        paddingLeft: theme.spacing.lg,
        alignItems: 'center',
    },
    linksContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexShrink: 0,
    },
}));

export const Navbar = ({ className }: ChildlessBaseComponent) => {
    const { classes } = useStyles();

    return (
        <Grid className={classNames(className, classes.navbarContainer)}>
            <Grid.Col span={6}>
                <Link to="/">
                    <img src="/images/ET-logo.png" alt="Events travel logo" />
                </Link>
            </Grid.Col>
            <Grid.Col span={6} className={classes.linksContainer}>
                <Tabs href="/">Home</Tabs>
                <Tabs href="/tickets">Tickets</Tabs>
            </Grid.Col>
        </Grid>
    );
};
