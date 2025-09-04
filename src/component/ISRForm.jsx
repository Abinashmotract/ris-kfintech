import React from "react";
import {
    Box,
    Typography,
    Grid,
    TextField,
    Checkbox,
    FormControlLabel,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";

export default function ISRForm() {
    return (
        <Box sx={{ maxWidth: "1000px", mx: "auto", p: 3 }}>
            {/* Heading */}
            <Typography variant="h6" align="center" gutterBottom sx={{ color: '#212529', fontWeight: 'bold', fontSize: '24pt' }}>
                Form ISR – 1
            </Typography>
            <Typography variant="body2" align="center" gutterBottom sx={{ fontSize: '12pt' }}>
                (see SEBI Circular No. SEBI/HO/MIRSD/MIRSD-PoD-1/P/CIR/2023/37 dated March 16, 2023 on Common and Simplified Norms for processing investor’s service request by RTAs and norms for furnishing PAN, KYC details and Nomination)
            </Typography>
            <Typography variant="h6" align="center" gutterBottom sx={{ color: '#212529', fontWeight: 'bold', fontSize: '24pt' }}>
                REQUEST FOR REGISTERING PAN, KYC DETAILS OR CHANGES / UPDATION THEREOF
            </Typography>
            <Typography variant="body2" align="center" gutterBottom sx={{ fontSize: '12pt' }}>
                [For Securities (Shares / Debentures / Bonds, etc.) of listed companies held in physical form]
            </Typography>
            {/* Section A */}
            <Box sx={{ py: 4 }}>
                {/* Section A */}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
                    <Typography variant="subtitle1" fontWeight="bold" sx={{ color: '#212529' }}>
                        Date: {new Date().toLocaleDateString('en-GB').replace(/\//g, '-')}
                    </Typography>
                </Box>

                <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" gutterBottom fontWeight="bold" sx={{ color: '#212529' }}>
                        A. I / We request you to Register / Change / Update the following (Tick ✓ relevant box)
                    </Typography>

                    <TableContainer>
                        <Table sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                            <TableBody>
                                <TableRow>
                                    {['PAN', 'Bank Details', 'Signature'].map((item) => (
                                        <TableCell key={item} sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                            <FormControlLabel control={<Checkbox />} label={item} />
                                        </TableCell>
                                    ))}
                                </TableRow>
                                <TableRow>
                                    {['Mobile Number', 'E-mail ID', 'Address'].map((item) => (
                                        <TableCell key={item} sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                            <FormControlLabel control={<Checkbox />} label={item} />
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>

                <Box sx={{ width: '100%', height: '1px', backgroundColor: 'rgba(0,0,0,0.12)', my: 2 }} />

                {/* Section B */}
                <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                        B. Security Details:
                    </Typography>

                    <TableContainer>
                        <Table sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                            <TableBody>
                                <TableRow>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", fontWeight: 'bold', width: '30%' }}>
                                        Name of the Issuer Company
                                    </TableCell>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                            <FormControl size="small" sx={{ minWidth: 300 }}>
                                                <InputLabel id="company-select-label">Select Company</InputLabel>
                                                <Select labelId="company-select-label" defaultValue="" label="Select Company">
                                                    <MenuItem value="" disabled>
                                                        Select Company
                                                    </MenuItem>
                                                    <MenuItem value="idbi">IDBI FLEXI BONDS 2A - 2AF</MenuItem>
                                                    <MenuItem value="company2">IDBI FLEXI BONDS 2A - 2AM</MenuItem>
                                                    <MenuItem value="company3">IDBI FLEXI BONDS 2A - 2AR</MenuItem>
                                                </Select>
                                            </FormControl>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <Typography variant="body2">Folio No.:</Typography>
                                                <Button variant="outlined" size="small" sx={{ textTransform: 'none' }}>
                                                    Add Folio
                                                </Button>
                                            </Box>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
                                            <Typography variant="caption" color="textSecondary">
                                                No folio details. Click on Add Folio
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                </TableRow>

                                {/* Second row - Security Holders */}
                                <TableRow>
                                    <TableCell sx={{
                                        border: "1px solid rgba(0,0,0,0.12)",
                                        fontWeight: 'bold'
                                    }}>
                                        Name(s) of the Security holder(s) as per the Certificate(s)
                                    </TableCell>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                            <Typography variant="body2" sx={{ minWidth: '20px', mr: 2 }}>1</Typography>
                                            <TextField
                                                variant="outlined"
                                                size="small"
                                                placeholder="First/Sole Holder"
                                                fullWidth
                                            />
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                            <Typography variant="body2" sx={{ minWidth: '20px', mr: 2 }}>2</Typography>
                                            <TextField
                                                variant="outlined"
                                                size="small"
                                                placeholder="Second Holder"
                                                fullWidth
                                            />
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant="body2" sx={{ minWidth: '20px', mr: 2 }}>3</Typography>
                                            <TextField
                                                variant="outlined"
                                                size="small"
                                                placeholder="Third Holder"
                                                fullWidth
                                            />
                                        </Box>
                                    </TableCell>
                                </TableRow>

                                {/* Third row - Number & Face value */}


                                {/* Fourth row - Distinctive numbers */}
                                <TableRow>
                                    <TableCell sx={{
                                        border: "1px solid rgba(0,0,0,0.12)",
                                        fontWeight: 'bold'
                                    }}>
                                        Distinctive number of securities (Optional)
                                    </TableCell>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                            <Button variant="outlined" size="small" sx={{ textTransform: 'none' }}>
                                                Add Distinctive Numbers
                                            </Button>
                                        </Box>
                                        <Typography variant="caption" color="textSecondary">
                                            No distinctive numbers. Click on Add
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>

                {/* Section C */}
                <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                        C.  I / We are submitting documents as per Table below (tick ✔ as relevant, refer to the instructions):
                    </Typography>

                    <TableContainer component={Paper}>
                        <Table sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", width: "5%", textAlign: "center" }}>
                                        #
                                    </TableCell>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", width: "5%", textAlign: "center" }}>
                                        ✓
                                    </TableCell>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", width: "45%" }}>
                                        Document / Information / Details
                                    </TableCell>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", width: "45%" }}>
                                        Instruction / Remark
                                    </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {/* Row 1 - PAN */}
                                <TableRow>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", textAlign: "center", verticalAlign: "top" }}>
                                        1
                                    </TableCell>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", textAlign: "center", verticalAlign: "top" }}>
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", verticalAlign: "top" }}>
                                        <Typography variant="body2" gutterBottom>
                                            PAN of (all) the (joint) holder(s)
                                        </Typography>
                                        <Box sx={{ pl: 2 }}>
                                            <Typography variant="body2" gutterBottom>
                                                PAN
                                            </Typography>
                                            {["First Holder PAN", "Second Holder PAN", "Third Holder PAN"].map((label, i) => (
                                                <Box
                                                    key={i}
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: 1,
                                                        mb: 1
                                                    }}
                                                >
                                                    <Typography variant="body2" sx={{ minWidth: "20px" }}>
                                                        {i + 1}
                                                    </Typography>
                                                    <TextField
                                                        variant="outlined"
                                                        size="small"
                                                        placeholder={label}
                                                        fullWidth
                                                    />
                                                </Box>
                                            ))}
                                            <Typography variant="body2">
                                                Whether it is Valid (linked to Aadhaar):
                                            </Typography>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 1 }}>
                                                <FormControlLabel control={<Checkbox />} label="Yes" />
                                                <FormControlLabel control={<Checkbox />} label="No" />
                                            </Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            border: "1px solid rgba(0,0,0,0.12)",
                                            verticalAlign: "top"
                                        }}
                                    >
                                        <Typography variant="body2" color="textSecondary" paragraph>
                                            PAN shall be valid only if it is linked to Aadhaar by March 31, 2023*
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            For Exemptions / Clarifications on PAN, please refer to Objection Memo in Page 6 & 7
                                        </Typography>
                                    </TableCell>
                                </TableRow>

                                {/* Row 2 - Demat Account */}
                                <TableRow>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", textAlign: "center", verticalAlign: "top" }}>
                                        2
                                    </TableCell>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", textAlign: "center", verticalAlign: "top" }}>
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", verticalAlign: "top" }}>
                                        <Typography variant="body2">Demat Account Number (Optional)</Typography>
                                    </TableCell>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", verticalAlign: "top" }}>
                                        <Typography variant="body2" gutterBottom>
                                            NSDL DPID Client ID / CDSL Client ID
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Also provide Client Master List (CML) of your Demat Account, provided by the Depository Participant.
                                        </Typography>
                                    </TableCell>
                                </TableRow>

                                {/* Row 3 - Proof of Address */}
                                <TableRow>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", textAlign: "center", verticalAlign: "top" }}>
                                        3
                                    </TableCell>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", textAlign: "center", verticalAlign: "top" }}>
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", verticalAlign: "top" }}>
                                        <Typography variant="body2" gutterBottom>
                                            Proof of Address of the first holder
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Any one of the documents, only if there is change in the address;
                                        </Typography>
                                        <Box sx={{ pl: 1, mt: 1 }}>
                                            {[
                                                "Unique Identification Number (UID) (Aadhaar)",
                                                "Valid Passport/ Registered Lease or Sale Agreement of Residence / Driving License",
                                                "Flat Maintenance bill accompanied with additional self-attested copy of Identity Proof of the holder/claimant.",
                                                "Utility bills like Telephone Bill (only land line), Electricity bill or Gas bill - Not more than 3 months old.",
                                                "Identity card / document with address, issued by Central/State Government, Departments, Regulatory Authorities, Public Sector, etc."
                                            ].map((item, index) => (
                                                <Box key={index} sx={{ display: "flex", alignItems: "flex-start", mb: 1 }}>
                                                    <Checkbox size="small" sx={{ mt: -0.5, mr: 1 }} />
                                                    <Typography variant="body2">{item}</Typography>
                                                </Box>
                                            ))}
                                        </Box>
                                    </TableCell>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", verticalAlign: "top" }}>
                                        <Typography variant="body2" color="textSecondary" paragraph>
                                            * or any date as may be specified by the CBDT (DP: Depository Participant)
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            If not required, the details available in the CML will be updated accordingly.
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>

            {/* Authorization Section */}
            <Box x={{ mb: 3 }}>
                <Typography variant="body2" color="textSecondary" paragraph>
                    * or any date as may be specified by the CBDT (DP: Depository Participant)
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                    In case it is not provided, the details available in the CML will be updated in the folio
                </Typography>

                <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                    Authorization:<sup>(1)</sup> We authorise you (RTA) to update the above PAN and KYC details in following additional folio(s) held in my / our name (use Separate Annexure if extra space is required):
                </Typography>
                <TableRow>
                    <TableCell colSpan={2} sx={{ border: "1px solid rgba(0,0,0,0.12)", p: 0 }}>
                        <Box sx={{ p: 2 }}>
                            <TableContainer sx={{ mb: 2 }}>
                                <Table sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", fontWeight: 'bold', width: '8%', textAlign: 'center' }}>S.No</TableCell>
                                            <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", fontWeight: 'bold', width: '22%' }}>Name of the Issuer Company</TableCell>
                                            <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", fontWeight: 'bold', width: '15%' }}>Folio No.</TableCell>
                                            <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", fontWeight: 'bold', width: '15%' }}>Quantity of securities</TableCell>
                                            <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", fontWeight: 'bold', width: '15%' }}>Face value of securities</TableCell>
                                            <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", fontWeight: 'bold', width: '25%' }}>Distinctive number of securities (Optional)</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {[1, 2, 3, 4, 5].map((row) => (
                                            <TableRow key={row}>
                                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", textAlign: 'center' }}>{row}</TableCell>
                                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                                    <TextField variant="outlined" size="small" fullWidth />
                                                </TableCell>
                                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                                    <FormControl fullWidth size="small">
                                                        <Select>
                                                            <MenuItem value="">Select Folio</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </TableCell>
                                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                                    <FormControl fullWidth size="small">
                                                        <Select>
                                                            <MenuItem value="">No of Securities</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </TableCell>
                                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                                    <FormControl fullWidth size="small">
                                                        <Select>
                                                            <MenuItem value="">Face Value</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </TableCell>
                                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                                    <FormControl fullWidth size="small">
                                                        <Select>
                                                            <MenuItem value="">From - To</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                            <Typography variant="body2" paragraph>
                                in which I / We are the holder(s) (strike off what is not applicable).
                            </Typography>

                            <Typography variant="body2" fontWeight="bold">
                                Declaration: All the above facts stated are true and correct.
                            </Typography>
                        </Box>
                    </TableCell>
                </TableRow>
            </Box>

            {/* Section C */}
            <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" gutterBottom>
                    C. Documents Submitted
                </Typography>
                <TableContainer>
                    <Table sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>#</TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>Document</TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>Instruction / Remark</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            <TableRow>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>1</TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>PAN of holder(s)</TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>Provide valid PAN linked with Aadhaar</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>2</TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>Demat Account No.</TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>Optional, provide CML</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

            {/* Signature Section */}
            <Paper sx={{ p: 2 }}>
                <Typography variant="subtitle1" gutterBottom>
                    Declaration: All the above facts stated are true and correct.
                </Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Signature</TableCell>
                                <TableCell>Holder 1</TableCell>
                                <TableCell>Holder 2</TableCell>
                                <TableCell>Holder 3</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Full Address</TableCell>
                                <TableCell>
                                    <TextField fullWidth label="Address Line 1" margin="dense" />
                                </TableCell>
                                <TableCell>
                                    <TextField fullWidth label="Address Line 1" margin="dense" />
                                </TableCell>
                                <TableCell>
                                    <TextField fullWidth label="Address Line 1" margin="dense" />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}
