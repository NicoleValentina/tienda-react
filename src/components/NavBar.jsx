import React from 'react';
import logo from '../media/logo.svg';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import { styled } from '@mui/material/styles';
import '../index.css';


export default function App() {
    const theme = createTheme({
        palette: {
            background: {
                main: '#000',
                light: '#fff',
                accent: '#0fd',
            },
            text: {
                primary: '#000',
                secondary: '#fff',
            }
        },
    });

    const Img = styled('img')``;
    const Ul = styled('ul')``;

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                bgcolor: 'background.main',
                height: 70,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                px: 5, 
            }}>
                <Img src={logo} className="logo" alt="logo" sx={{
                    width: 150,
                }} />

                <Box sx={{display: 'block', width: '50%',}}>
                    <Ul sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        color: 'text.secondary',
                    }}>
                        <li><a href="#">Categoria</a></li>
                        <li><a href="#">Categoria</a></li>
                        <li><a href="#">Categoria</a></li>
                        <li><a href="#">Categoria</a></li>
                    </Ul>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
