import React from 'react';
import logo from '../media/logo.svg';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import { styled } from '@mui/material/styles';




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
    const Li = styled('li')``;
    const Link = styled('a')``;

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                bgcolor: 'background.main',
                height: 70,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'

            }}>
                <Img src={logo} className="logo" alt="logo" sx={{
                    width: 150,
                }} />

                <Box>
                    <Ul sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        color: 'text.secondary',
                    }}>
                        <Li><Link>Link 1</Link></Li>
                        <Li><Link>Link 1</Link></Li>
                        <Li><Link>Link 1</Link></Li>
                        <Li><Link>Link 1</Link></Li>
                    </Ul>
                </Box>
            </Box>


        </ThemeProvider>
    );
}
