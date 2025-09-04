// OnlineFormDialog.jsx
import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box,
    Typography,
    IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import { Link } from 'react-router-dom';

const OnlineFormDialog = ({ open, onClose, formId, formTitle }) => {
    const handleDownload = () => {
        // Implement download functionality here
        console.log(`Downloading ${formId}`);
        // You can trigger actual download logic
        onClose();
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #f5f7ff 0%, #e8ecfb 100%)'
                }
            }}
        >
            <DialogTitle sx={{ m: 0, p: 2, backgroundColor: '#384486', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" component="div">
                    {formId} - Online Form
                </Typography>
                <IconButton aria-label="close" onClick={onClose} sx={{ color: 'white' }}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>


            <DialogContent sx={{ p: 3 }}>
                <Box sx={{ textAlign: 'center', py: 2 }}>
                    <Typography variant="body1" gutterBottom>
                        {formTitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                        Click the button below to download the PDF form
                    </Typography>
                </Box>
            </DialogContent>

            <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
                <Link to={`/form/${formId}`}>
                    <Button
                        variant="contained"
                        startIcon={<DownloadIcon />}
                        onClick={handleDownload}
                        sx={{
                            backgroundColor: '#384486',
                            borderRadius: 2,
                            px: 4,
                            py: 1,
                            '&:hover': {
                                backgroundColor: '#2a3369',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                            },
                            transition: 'all 0.3s ease'
                        }}
                    >
                        Download PDF
                    </Button>
                </Link>
            </DialogActions>
        </Dialog>
    );
};

export default OnlineFormDialog;