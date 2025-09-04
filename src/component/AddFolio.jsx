import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box, IconButton, Typography, } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const AddFolio = ({ open, onClose, onSave }) => {
    const [folio, setFolio] = useState("");
    const [certificate, setCertificate] = useState("");
    const [error, setError] = useState(false);

    const handleSave = () => {
        if (!certificate.trim()) {
            setError(true);
            return;
        }
        setError(false);

        // Pass data to parent
        if (onSave) {
            onSave({ folio, certificate });
        }
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth PaperProps={{ sx: { borderRadius: 2 } }}>
            <DialogTitle
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    bgcolor: "#384486",
                    color: "#fff",
                    py: 1.5,
                    px: 2,
                }}
            >
                <Typography variant="h6" component="div">Add Folio</Typography>
                <IconButton onClick={onClose} sx={{ color: "#fff" }}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent dividers>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <TextField
                        label="Folio Number"
                        variant="outlined"
                        value={folio}
                        onChange={(e) => setFolio(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        label="Certificate Number"
                        variant="outlined"
                        value={certificate}
                        onChange={(e) => setCertificate(e.target.value)}
                        error={error}
                        helperText={error ? "Certificate number is required" : ""}
                        fullWidth
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSave} variant="contained">Save</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddFolio;