// HomePage.js
import React, { useState, useEffect, useRef } from 'react';
import {
  Container,
  Typography,
  Paper,
  Grid,
  Button,
  Drawer,
  Box,
  Divider,
  alpha,
  Fade,
  Zoom,
  Grow
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import EditIcon from '@mui/icons-material/Edit';
import HomeIcon from '@mui/icons-material/Home';
import { keyframes } from '@emotion/react';
import isrforms from '../../src/assets/isrforms.png';
import OnlineFormDialog from './OnlineFormDialog';

// Enhanced Background animation keyframes
const floatAnimation = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(10px, 15px) rotate(3deg); }
  66% { transform: translate(5px, 20px) rotate(-2deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.08); opacity: 0.8; }
  100% { transform: scale(1); opacity: 0.7; }
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const shimmerAnimation = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const cardHover = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-5px); }
`;

const AnimatedBackground = Box;
const FloatingShape = Box;

const HomePage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);
  const formsRef = useRef(null);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);

  useEffect(() => {
    setIsVisible(true);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (formsRef.current) {
      const formCards = formsRef.current.querySelectorAll('.form-card');
      formCards.forEach((card, index) => {
        observer.observe(card);
      });
    }

    return () => observer.disconnect();
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const forms = [
    {
      id: "ISR 1",
      title: "Register/Change PAN & KYC Details",
    },
    {
      id: "ISR 2",
      title: "Confirmation of Signature of securities holder by Bank",
    },
    {
      id: "SH 13",
      title: "Nomination Form",
    },
    {
      id: "SH 14",
      title: "Cancellation of Nomination",
    },
    {
      id: "Annexure D",
      title: "Individual Affidavits to be given by ALL the Legal Heirs OR Legal Heirs named in Succession Certificate*/ Probate of Will*/ Will*/ Letter of Administration*/ Legal Heirship Certificate*(or its equivalent certificate)*/Court Decree*",
    },
    {
      id: "Annexure E",
      title: "Bond of Indemnity to be furnished jointly by all Legal Heir(s) including the Claimant(s)",
    },
  ];

  const handleOpenDialog = (form) => {
    console.log(form, 'form')
    setSelectedForm(form);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedForm(null);
  };

  return (
    <>
      {/* Enhanced Animated Background */}
      <AnimatedBackground
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          background: 'linear-gradient(-45deg, #e8f4f8, #f9f2fc, #f0f8ff, #f5f0ff)',
          backgroundSize: '400% 400%',
          animation: `${gradientAnimation} 15s ease infinite`,
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 70%, rgba(255,255,255,0.8) 0%, transparent 40%)',
          }
        }}
      >
        <FloatingShape
          sx={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'linear-gradient(45deg, rgba(100,181,246,0.2), transparent)',
            animation: `${floatAnimation} 20s ease-in-out infinite`,
          }}
        />
        <FloatingShape
          sx={{
            position: 'absolute',
            bottom: '15%',
            right: '10%',
            width: 200,
            height: 200,
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            background: 'linear-gradient(45deg, rgba(186,104,200,0.2), transparent)',
            animation: `${pulseAnimation} 15s ease-in-out infinite`,
          }}
        />
        <FloatingShape
          sx={{
            position: 'absolute',
            top: '40%',
            right: '20%',
            width: 150,
            height: 150,
            background: 'linear-gradient(45deg, rgba(77,182,172,0.2), transparent)',
            borderRadius: '50%',
            animation: `${floatAnimation} 25s ease-in-out infinite`,
            animationDelay: '2s',
          }}
        />
      </AnimatedBackground>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Paper
          elevation={0}
          sx={{
            p: 4,
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            borderRadius: 2,
            mb: 4,
            border: "1px solid rgba(0, 0, 0, 0.08)",
            animation: `${fadeInUp} 0.8s ease-out`,
          }}
          ref={headerRef}
        >
          {/* Header Section with staggered animations */}
          <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
            <Box sx={{ flex: 1, minWidth: "280px" }}>
              <Fade in={isVisible} timeout={800}>
                <Typography variant="h3" component="h2" sx={{ color: "#888fb6", fontSize: "60px", lineHeight: 1, m: 0 }}>
                  Forms
                </Typography>
              </Fade>
              <Fade in={isVisible} timeout={1000}>
                <Typography variant="h5" component="h5" sx={{ fontWeight: "bold", color: "#384486", fontSize: "42px", lineHeight: 1.1, m: 0, mt: 1 }}>
                  Service Request
                </Typography>
              </Fade>
              <Fade in={isVisible} timeout={1200}>
                <Typography variant="body1" paragraph sx={{ my: 2, color: "rgba(0, 0, 0, 0.6)" }}>
                  Standard forms and annexures as per SEBI
                </Typography>
              </Fade>
              <Fade in={isVisible} timeout={1400}>
                <Box sx={{ width: "120px", height: "10px", backgroundColor: "#e9ecef", borderRadius: "5px", mt: 1, overflow: "hidden", }}>
                  <Box
                    sx={{
                      width: "80px",
                      height: "100%",
                      backgroundColor: "#384486",
                      borderRadius: "5px",
                      animation: `${shimmerAnimation} 2s infinite linear`,
                      background: `linear-gradient(to right, #384486 0%, #5a67a8 50%, #384486 100%)`,
                      backgroundSize: '1000px 100%',
                    }}
                  />
                </Box>
              </Fade>
            </Box>
            <Zoom in={isVisible} timeout={1600}>
              <Box>
                <img src={isrforms} alt="Forms Illustration" height="200" width="400" />
              </Box>
            </Zoom>
          </Box>

          <Divider sx={{ my: 3, borderColor: "rgba(0, 0, 0, 0.08)" }} />

          {/* Forms List with staggered animations */}
          <Grid container spacing={2} sx={{ justifyContent: "center" }} ref={formsRef}>
            {forms?.map((form, index) => (
              <Grid item key={form.id} sx={{ width: "530px" }}>
                <Box
                  className="form-card"
                  sx={{
                    borderRadius: 2,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                    backgroundColor: "#d6d9e6",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "250px",
                    opacity: 0,
                    transform: 'translateY(20px)',
                    transition: 'opacity 0.6s ease, transform 0.6s ease',
                    '&.animate-in': {
                      opacity: 1,
                      transform: 'translateY(0)',
                    },
                    '&:hover': {
                      animation: `${cardHover} 0.3s forwards ease-out`,
                      boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                    }
                  }}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  {/* Content area */}
                  <Box sx={{ p: 3, flexGrow: 1 }}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ fontWeight: "bold", color: "#384486" }}
                    >
                      {form.id}
                    </Typography>
                    <Typography variant="body2" paragraph sx={{ mb: 3, color: "text.secondary" }}>
                      {form.title}
                    </Typography>
                  </Box>

                  {/* Bottom strip with animated buttons */}
                  <Box
                    sx={{
                      height: "40px",
                      backgroundColor: "#2c3e50",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      px: 2,
                    }}
                  >
                    <Button
                      variant="text"
                      sx={{
                        color: "#fff",
                        textTransform: "none",
                        p: 0,
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          color: alpha('#fff', 0.9),
                        }
                      }}
                      startIcon={<DownloadIcon />}
                    >
                      Download
                    </Button>

                    <Button
                      variant="text"
                      sx={{
                        color: "#fff",
                        textTransform: "none",
                        p: 0,
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          color: alpha('#fff', 0.9),
                        }
                      }}
                      onClick={() => handleOpenDialog(form)}
                      endIcon={<EditIcon />}
                    >
                      Online Form
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Use the Footer component */}
        {/* <Footer isVisible={isVisible} /> */}
      </Container>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(255, 255, 255, 0.97)',
            backdropFilter: 'blur(10px)'
          }
        }}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <Typography variant="h6" sx={{ p: 2, color: '#2c3e50', fontWeight: 'bold' }}>
            KEINTECH
          </Typography>
          <Button
            color="inherit"
            startIcon={<HomeIcon />}
            sx={{
              display: 'block',
              py: 1,
              color: '#2c3e50',
              justifyContent: 'flex-start',
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: alpha('#2c3e50', 0.1),
                transform: 'translateX(5px)'
              }
            }}
          >
            Home
          </Button>
        </Box>
      </Drawer>

      <OnlineFormDialog open={dialogOpen} onClose={handleCloseDialog} formId={selectedForm?.id} formTitle={selectedForm?.title} />
    </>
  );
};

export default HomePage;