// src/component/Layout.jsx
import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar isVisible={isVisible} toggleDrawer={toggleDrawer} />
            <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
            </Box>
            <Footer isVisible={isVisible} />
        </Box>
    );
};

export default Layout;