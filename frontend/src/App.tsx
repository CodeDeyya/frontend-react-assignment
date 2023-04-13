import React from 'react';
import './App.css';
import { createStyles, MantineProvider } from '@mantine/core';
import { colors } from './app/constants/colors';
import { Provider } from 'react-redux';
import { store } from './app/store/store';
import { Route, Routes } from 'react-router-dom';
import { PageLayout } from './view/components/PageLayout/PageLayout';
import { AddTicketsPage } from './app/pages/add-tickets/AddTicketsPages';
import { TicketsListPage } from './app/pages/tickets-list/TicketsListPage';

function App() {
    return (
        <Provider store={store}>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    colorScheme: 'light',
                }}
            >
                <Routes>
                    <Route path="/" element={<PageLayout />}>
                        <Route index element={<AddTicketsPage />} />
                        <Route path="tickets" element={<TicketsListPage />} />
                    </Route>
                </Routes>
            </MantineProvider>
        </Provider>
    );
}

export default App;
