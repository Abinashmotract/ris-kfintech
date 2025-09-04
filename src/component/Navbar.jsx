// Navbar.js
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  useMediaQuery,
  useTheme,
  Box,
  alpha,
  Slide,
  Grow,
  Fade
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import kfintechlogo from '../../src/assets/kfintech_logo.svg';

const Navbar = ({ isVisible, toggleDrawer }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Slide direction="down" in={isVisible} timeout={800}>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          color: '#2c3e50',
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        }}
      >
        <Box maxWidth="lg" sx={{ margin: '0 auto', width: '100%' }}>
          <Toolbar disableGutters>
            {isMobile && (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer}
                sx={{ mr: 2, color: '#2c3e50' }}
              >
                <MenuIcon />
              </IconButton>
            )}

            {/* Logo on Left with animation */}
            <Grow in={isVisible} timeout={1000}>
              <Box>
                <img src={kfintechlogo} alt="KFintech Logo" height="100" width="240px" />
              </Box>
            </Grow>

            {/* Spacer pushes Home button to the right */}
            <Box sx={{ flexGrow: 1 }} />

            {/* Home on Right with animation */}
            {!isMobile && (
              <Fade in={isVisible} timeout={1500}>
                <Button
                  color="inherit"
                  startIcon={<HomeIcon />}
                  sx={{
                    fontWeight: 'bold',
                    color: '#2c3e50',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: alpha('#2c3e50', 0.1),
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Home
                </Button>
              </Fade>
            )}
          </Toolbar>
        </Box>
      </AppBar>
    </Slide>
  );
};

export default Navbar;