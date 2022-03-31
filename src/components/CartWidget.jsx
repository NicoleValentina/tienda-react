import React from 'react';
import {ThemeProvider, createTheme } from '@mui/system';
import '../index.css';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


export default function Cart() {
    const theme = createTheme({
        palette: {
            background: {
                main: '#000',
                light: '#fff',
                accent: '#0fd',
            }
        },
    });

    return (
        <ThemeProvider theme={theme}>
                <ShoppingBagIcon sx={{
                    color: 'background.light',
                    fontSize: 32,
                    position: 'relative',
                    top: 15
                }} />
        </ThemeProvider>
    );
}
