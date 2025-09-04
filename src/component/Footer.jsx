// Footer.js
import React from 'react';
import {
    Paper,
    Grid,
    Typography,
    Box,
    Fade,
    IconButton
} from '@mui/material';
import { keyframes } from '@emotion/react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Footer = ({ isVisible }) => {
    return (
        <Fade in={isVisible} timeout={2000}>
            <Paper
                elevation={0}
                sx={{
                    p: 4,
                    backgroundColor: '#f8f9fa',
                    borderRadius: 0,
                    borderTop: '1px solid rgba(0, 0, 0, 0.08)',
                    transform: 'translateY(20px)',
                    animation: `${fadeInUp} 0.8s ease-out 0.5s forwards`,
                    opacity: 0
                }}
            >
                {/* KFintech Brand Section */}
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Typography variant="h4" component="div" fontWeight="bold" color="#2c3e50" gutterBottom>
                        KFintech
                    </Typography>
                    <Typography variant="subtitle1" color="#6c757d" fontWeight="bold" gutterBottom>
                        EXPERIENCE TRANSFORMATION
                    </Typography>
                    <Typography variant="body2" color="#6c757d" sx={{ maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
                        A pioneer in the financial sector KFintech's corporate registry services have made a mark in the market for their innovative and technology oriented service offerings.
                    </Typography>
                </Box>

                <Grid container spacing={4} sx={{ mb: 4 }}>
                    {/* INVESTORS Column */}
                    <Grid item xs={12} md={3}>
                        <Typography variant="subtitle2" fontWeight="bold" color="#2c3e50" gutterBottom>
                            INVESTORS
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                            {['Kprism', 'Form 15G/15H/10H', 'IPO Allocation Status', 'evoting', 'Video Conferencing', 'Bonds - Bank Mandate'].map((item, index) => (
                                <Typography key={index} variant="body2" color="#6c757d" sx={{ cursor: 'pointer', '&:hover': { color: '#384486' } }}>
                                    {item}
                                </Typography>
                            ))}
                        </Box>
                    </Grid>

                    {/* CLIENTS Column */}
                    <Grid item xs={12} md={3}>
                        <Typography variant="subtitle2" fontWeight="bold" color="#2c3e50" gutterBottom>
                            CLIENTS
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                            {['FINTRAK', 'Corporate Advisory Services'].map((item, index) => (
                                <Typography key={index} variant="body2" color="#6c757d" sx={{ cursor: 'pointer', '&:hover': { color: '#384486' } }}>
                                    {item}
                                </Typography>
                            ))}
                        </Box>
                    </Grid>

                    {/* MERCHANT BANKERS Column */}
                    <Grid item xs={12} md={3}>
                        <Typography variant="subtitle2" fontWeight="bold" color="#2c3e50" gutterBottom>
                            MERCHANT BANKERS
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                            {['Kreation', 'Kosmic'].map((item, index) => (
                                <Typography key={index} variant="body2" color="#6c757d" sx={{ cursor: 'pointer', '&:hover': { color: '#384486' } }}>
                                    {item}
                                </Typography>
                            ))}
                        </Box>
                    </Grid>

                    {/* LEGAL and PRIVACY Column */}
                    <Grid item xs={12} md={3}>
                        <Typography variant="subtitle2" fontWeight="bold" color="#2c3e50" gutterBottom>
                            LEGAL and PRIVACY
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                            {['Terms of Use', 'Privacy Policy', 'RTA SEBI Guidelines', 'Disclosures'].map((item, index) => (
                                <Typography key={index} variant="body2" color="#6c757d" sx={{ cursor: 'pointer', '&:hover': { color: '#384486' } }}>
                                    {item}
                                </Typography>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                {/* Social Media and Copyright */}
                <Box sx={{
                    textAlign: 'center',
                    pt: 3,
                    borderTop: '1px solid rgba(0, 0, 0, 0.08)',
                    opacity: 0,
                    animation: `${fadeInUp} 0.5s ease-out 1.5s forwards`
                }}>
                    {/* Social Media Icons */}
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="body2" color="#6c757d" gutterBottom>
                            Follow Us:
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                            <IconButton size="small" sx={{ color: '#6c757d', '&:hover': { color: '#384486' } }}>
                                <LinkedInIcon fontSize="small" />
                            </IconButton>
                            <IconButton size="small" sx={{ color: '#6c757d', '&:hover': { color: '#384486' } }}>
                                <TwitterIcon fontSize="small" />
                            </IconButton>
                            <IconButton size="small" sx={{ color: '#6c757d', '&:hover': { color: '#384486' } }}>
                                <FacebookIcon fontSize="small" />
                            </IconButton>
                            <IconButton size="small" sx={{ color: '#6c757d', '&:hover': { color: '#384486' } }}>
                                <InstagramIcon fontSize="small" />
                            </IconButton>
                        </Box>
                    </Box>

                    {/* Copyright */}
                    <Typography variant="body2" color="#6c757d">
                        © Copyright KFintech 2023 | All Rights Reserved.
                    </Typography>
                </Box>
            </Paper>
        </Fade>
    );
};

export default Footer;