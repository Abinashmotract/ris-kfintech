// Footer.js
import React from 'react';
import {
  Paper,
  Grid,
  Typography,
  Button,
  Box,
  Fade,
  alpha
} from '@mui/material';
import { keyframes } from '@emotion/react';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Footer = ({ isVisible }) => {
  const menuItems = [
    { title: 'ABOUT US', items: ['About Us', 'Careers', 'Contact Us', 'Grievance'] },
    { title: 'INVESTORS', items: ['KYC/TPIN', 'Folio Status', 'IPO Application Status', 'Annexure'] },
    { title: 'CLIENTS', items: ['Features', 'Login', 'Annexure', 'Corporate Advisory Services'] },
    { title: 'MERCHANT BANKERS', items: ['Login'] },
    { title: 'LEGAL AND PRIVACY', items: ['Terms of Use', 'Privacy Policy', 'SEBI Guidelines', 'Guidelines'] }
  ];

  return (
    <Fade in={isVisible} timeout={2000}>
      <Paper
        elevation={0}
        sx={{
          p: 3,
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(10px)',
          borderRadius: 2,
          border: '1px solid rgba(0, 0, 0, 0.08)',
          transform: 'translateY(20px)',
          animation: `${fadeInUp} 0.8s ease-out 0.5s forwards`,
          opacity: 0
        }}
      >
        <Grid container spacing={4}>
          {menuItems.map((section, index) => (
            <Grid item xs={6} md={2.4} key={index}>
              <Typography
                variant="subtitle2"
                gutterBottom
                fontWeight="bold"
                color="primary"
                sx={{
                  opacity: 0,
                  animation: `${fadeInUp} 0.5s ease-out ${index * 0.1 + 0.8}s forwards`
                }}
              >
                {section.title}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {section.items.map((item, itemIndex) => (
                  <Button
                    key={itemIndex}
                    size="small"
                    sx={{
                      justifyContent: 'flex-start',
                      color: 'text.secondary',
                      textTransform: 'none',
                      fontSize: '0.8rem',
                      py: 0.5,
                      opacity: 0,
                      animation: `${fadeInUp} 0.5s ease-out ${(index * 0.1 + itemIndex * 0.05 + 0.9)}s forwards`,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: 'transparent',
                        transform: 'translateX(5px)'
                      }
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{
          mt: 4,
          textAlign: 'center',
          pt: 2,
          borderTop: '1px solid rgba(0, 0, 0, 0.08)',
          opacity: 0,
          animation: `${fadeInUp} 0.5s ease-out 1.5s forwards`
        }}>
          <Typography variant="body2" color="textSecondary">
            Branch - Bank Mandate | Kenink
          </Typography>
        </Box>
      </Paper>
    </Fade>
  );
};

export default Footer;