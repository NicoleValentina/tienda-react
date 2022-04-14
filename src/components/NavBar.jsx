import React, { useState, useEffect } from 'react';
import logo from '../media/logo.svg';
import { listaProductos } from '../utils/Productos'
import { Link } from "react-router-dom";
import { Box, ThemeProvider, createTheme } from '@mui/system';
import { styled } from '@mui/material/styles';
import '../index.css';
import CartWidget from './CartWidget'


export default function NavBar() {

    const [categoria, setCategoria] = useState([])

    useEffect(() => {
        listaProductos()
            .then((res) => {
                let cat = res.map(item => item.categoria)
                let nav = [...new Set(cat)]
                setCategoria(nav)
            })

            .catch((err) => {
                console.log(err);
            })
    }, [])


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
            <Box className="navBar" sx={{
                bgcolor: 'background.main',
                height: 70,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                px: 5,
            }}>
                <Link to={`/`}>
                    <Img src={logo} className="logo" alt="logo" />
                </Link>

                <Box sx={{ display: 'block', width: '50%', }}>
                    <Ul sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        color: 'text.secondary',
                    }}>
                        {categoria.map(item =>
                            <li key={item}><Link to={`/category/` + item}>{item}</Link></li>)}


                    </Ul>
                </Box>

                <CartWidget />

            </Box>
        </ThemeProvider>
    );
}
