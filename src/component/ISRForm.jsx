import React, { useState } from "react";
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
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import AddFolio from "./AddFolio";

const ISRForm = () => {
    const [openFolioDialog, setOpenFolioDialog] = useState(false);

    const handleOpen = () => setOpenFolioDialog(true);
    const handleClose = () => setOpenFolioDialog(false);

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
                                                <Button variant="outlined" size="small" sx={{ textTransform: 'none' }} onClick={handleOpen}>
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
                    <TableContainer>
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
                                        <TextField variant="outlined" size="small" placeholder="NSDL DPID Client ID / CDSL Client ID" fullWidth />
                                        <Typography variant="body2">Also provide Client Master List (CML) of your Demat Account, provided by the Depository Participant.</Typography>
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
                                                "Identity card / document with address, issued by any of the following: Central/State Government and its Departments, Statutory / Regulatory Authorities, Public Sector Undertakings, Scheduled Commercial Banks, Public Financial Institutions duly attested by the employer with date and organisation stamp",
                                                "For FII / sub account, Power of Attorney given by FII / sub-account to the Custodians (which are duly notarized and / or apostilled or consularised) that gives the registered address should be taken.",
                                                "Proof of address in the name of the spouse accompanied with selfattested copy of Identity Proof of the spouse.",
                                                "Client Master List (CML) of the Demat Account of the holder / claimant, provided by the Depository Participant."
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

                                <TableRow>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", textAlign: "center", verticalAlign: "top" }}>
                                        4
                                    </TableCell>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", textAlign: "center", verticalAlign: "top" }}>
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", verticalAlign: "top" }}>
                                        <Typography variant="body2" gutterBottom>
                                            Bank details
                                        </Typography>
                                        <Box sx={{ pl: 1, mt: 1 }}>
                                            {["IFSC Code", "Account Number", "Bank Name", "Branch Name"].map((item, index) => (
                                                <Box key={index} sx={{ display: "flex", alignItems: "flex-start", mb: 1 }}>
                                                    <TextField variant="outlined" size="small" placeholder={item} fullWidth />
                                                </Box>
                                            ))}
                                            <Typography variant="body2">
                                                Provide the following:
                                            </Typography>
                                            <Box sx={{ mt: 1 }}>
                                                <FormControlLabel control={<Checkbox />} label="Original cancelled cheque bearing the name of the security holder; OR" />
                                                <FormControlLabel control={<Checkbox />} label="Bank passbook/statement attested by the Bank;" />
                                            </Box>
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

                                <TableRow>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", textAlign: "center", verticalAlign: "top" }}>
                                        5
                                    </TableCell>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", textAlign: "center", verticalAlign: "top" }}>
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell colSpan={2} sx={{ border: "1px solid rgba(0,0,0,0.12)", verticalAlign: "top" }}>
                                        <Typography variant="body2" gutterBottom>
                                            E-mail address #
                                        </Typography>
                                        <Box sx={{ pl: 1, mt: 1 }}>
                                            <TextField variant="outlined" size="small" placeholder="eMail Address" fullWidth />
                                        </Box>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", textAlign: "center", verticalAlign: "top" }}>
                                        6
                                    </TableCell>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", textAlign: "center", verticalAlign: "top" }}>
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell colSpan={2} sx={{ border: "1px solid rgba(0,0,0,0.12)", verticalAlign: "top" }}>
                                        <Typography variant="body2" gutterBottom>
                                            Mobile #
                                        </Typography>
                                        <Box sx={{ pl: 1, mt: 1 }}>
                                            <TextField variant="outlined" size="small" placeholder="Mobile Number" fullWidth />
                                        </Box>
                                    </TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>

            {/* Authorization Section */}
            {/* Authorization Section */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="body2" color="textSecondary" paragraph>
                    * or any date as may be specified by the CBDT (DP: Depository Participant)
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                    In case it is not provided, the details available in the CML will be updated in the folio
                </Typography>

                <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                    Authorization:<sup>(1)</sup> We authorise you (RTA) to update the above PAN and KYC details in following additional folio(s) held in my / our name (use Separate Annexure if extra space is required):
                </Typography>

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
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}></TableCell>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}></TableCell>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}></TableCell>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}></TableCell>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}></TableCell>
                                </TableRow>
                            ))}
                            {/* Input row */}
                            <TableRow>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", textAlign: "center" }}></TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                    <FormControl size="small" sx={{ minWidth: 150 }}>
                                        <InputLabel id="company-select-label">Select Company</InputLabel>
                                        <Select labelId="company-select-label" defaultValue="">
                                            <MenuItem value="" disabled>Select Company</MenuItem>
                                            <MenuItem value="idbi">IDBI FLEXI BONDS 2A - 2AF</MenuItem>
                                            <MenuItem value="company2">IDBI FLEXI BONDS 2A - 2AM</MenuItem>
                                            <MenuItem value="company3">IDBI FLEXI BONDS 2A - 2AR</MenuItem>
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                    <TextField variant="outlined" size="small" placeholder="Folio" fullWidth />
                                </TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                    <TextField variant="outlined" size="small" placeholder="No of Securities" fullWidth />
                                </TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                    <TextField variant="outlined" size="small" placeholder="Face Value" fullWidth />
                                </TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                    <TextField variant="outlined" size="small" placeholder="From - To" fullWidth />
                                </TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                    <Button variant="contained" color="primary" sx={{ textTransform: 'none' }} size="small">Add</Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <Typography variant="body2" paragraph sx={{ mt: 2 }}>
                    in which I / We are the holder(s) (strike off what is not applicable).
                </Typography>

                <Typography variant="body2" fontWeight="bold">
                    Declaration: All the above facts stated are true and correct.
                </Typography>
            </Box>


            {/* Section C */}
            <Box sx={{ py: 4 }}>
                <TableContainer>
                    <Table sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", fontWeight: 'bold' }}></TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", fontWeight: 'bold' }}>Holder 1</TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", fontWeight: 'bold' }}>Holder 2</TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", fontWeight: 'bold' }}>Holder 3</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {/* Signature Row */}
                            <TableRow>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>Signature</TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}></TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}></TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}></TableCell>
                            </TableRow>

                            {/* Name Row */}
                            <TableRow>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>Name</TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}></TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}></TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}></TableCell>
                            </TableRow>

                            {/* Full Address - Line 1 */}
                            <TableRow>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>Full Address</TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                    <TextField variant="outlined" size="small" placeholder="Address Line 1" fullWidth />
                                </TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                    <TextField variant="outlined" size="small" placeholder="Address Line 1" fullWidth />
                                </TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                    <TextField variant="outlined" size="small" placeholder="Address Line 1" fullWidth />
                                </TableCell>
                            </TableRow>

                            {/* Full Address - Line 2 */}
                            <TableRow>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}></TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                    <TextField variant="outlined" size="small" placeholder="Address Line 2" fullWidth />
                                </TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                    <TextField variant="outlined" size="small" placeholder="Address Line 2" fullWidth />
                                </TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                    <TextField variant="outlined" size="small" placeholder="Address Line 2" fullWidth />
                                </TableCell>
                            </TableRow>

                            {/* Full Address - Line 3 */}
                            <TableRow>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}></TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                    <TextField variant="outlined" size="small" placeholder="Address Line 3" fullWidth />
                                </TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                    <TextField variant="outlined" size="small" placeholder="Address Line 3" fullWidth />
                                </TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                    <TextField variant="outlined" size="small" placeholder="Address Line 3" fullWidth />
                                </TableCell>
                            </TableRow>

                            {/* PIN Code and City Row */}
                            <TableRow>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>PIN Code</TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={6}>
                                            <TextField variant="outlined" size="small" placeholder="City Name" fullWidth />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField variant="outlined" size="small" placeholder="PIN Code" fullWidth />
                                        </Grid>
                                    </Grid>
                                </TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={6}>
                                            <TextField variant="outlined" size="small" placeholder="City Name" fullWidth />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField variant="outlined" size="small" placeholder="PIN Code" fullWidth />
                                        </Grid>
                                    </Grid>
                                </TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={6}>
                                            <TextField variant="outlined" size="small" placeholder="City Name" fullWidth />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField variant="outlined" size="small" placeholder="PIN Code" fullWidth />
                                        </Grid>
                                    </Grid>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<DownloadIcon />}
                    sx={{ textTransform: 'none', backgroundColor: '#3a4385' }}
                >
                    Download PDF Form
                </Button>
            </Box>
            <AddFolio open={openFolioDialog} onClose={handleClose} />
        </Box>
    );
}
export default ISRForm;