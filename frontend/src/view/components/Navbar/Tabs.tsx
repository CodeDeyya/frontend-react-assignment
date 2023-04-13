import React from 'react';
import { createStyles } from '@mantine/core';
import { BaseComponent } from '../../../app/interfaces/BaseComponent';
import { useGenericStyles } from '../../../app/styles/useGenericStyles';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

interface NavLinkProps extends BaseComponent {
    href: string;
}

const useStyles = createStyles((theme) => ({
    active_link: {
        display: 'block',
        padding: theme.spacing.md,
        textDecoration: 'none',
        color: 'white',
        borderBottom: '2px solid white',
    },
    inactive_link: {
        display: 'block',
        padding: theme.spacing.md,
        textDecoration: 'none',
        color: 'white',
    },
}));

export const Tabs = ({ children, href }: NavLinkProps) => {
    const { classes } = useStyles();
    const { classes: genericClasses } = useGenericStyles();

    return (
        <NavLink
            to={href}
            className={({ isActive }) => {
                if (isActive) return classNames(classes.active_link, genericClasses.hoverable);

                return classNames(classes.inactive_link, genericClasses.hoverable);
            }}
        >
            {children}
        </NavLink>
    );
};
