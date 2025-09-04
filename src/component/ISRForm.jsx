import React, { useState, useEffect } from "react";
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
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const ISRForm = () => {
    const [openFolioDialog, setOpenFolioDialog] = useState(false);
    
    // Form state management
    const [formData, setFormData] = useState({
        // Section A - Request checkboxes
        pan: false,
        bankDetails: false,
        signature: false,
        mobileNumber: false,
        emailId: false,
        address: false,
        
        // Section B - Security Details
        selectedCompany: '',
        folioNumber: '',
        certificateNumber: '',
        firstHolder: '',
        secondHolder: '',
        thirdHolder: '',
        
        // Section C - Documents
        panFirstHolder: '',
        panSecondHolder: '',
        panThirdHolder: '',
        panValidLinked: false,
        panNotValidLinked: false,
        dematAccount: '',
        
        // Proof of Address checkboxes
        uidAadhaar: false,
        passportLease: false,
        flatMaintenance: false,
        utilityBills: false,
        identityCard: false,
        fiiPowerOfAttorney: false,
        spouseProof: false,
        clientMasterList: false,
        
        // Bank Details
        ifscCode: '',
        accountNumber: '',
        bankName: '',
        branchName: '',
        cancelledCheque: false,
        bankPassbook: false,
        
        // Contact Details
        emailAddress: '',
        mobileNumber: '',
        
        // Authorization Table
        authorizationFolios: [],
        
        // Signature Section
        holder1Address1: '',
        holder1Address2: '',
        holder1Address3: '',
        holder1City: '',
        holder1PinCode: '',
        holder2Address1: '',
        holder2Address2: '',
        holder2Address3: '',
        holder2City: '',
        holder2PinCode: '',
        holder3Address1: '',
        holder3Address2: '',
        holder3Address3: '',
        holder3City: '',
        holder3PinCode: ''
    });

    // Load form data from localStorage on component mount
    useEffect(() => {
        const savedData = localStorage.getItem('isrFormData');
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    // Save form data to localStorage whenever formData changes
    useEffect(() => {
        localStorage.setItem('isrFormData', JSON.stringify(formData));
    }, [formData]);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleCheckboxChange = (field) => {
        setFormData(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    };

    const handleOpen = () => setOpenFolioDialog(true);
    const handleClose = () => setOpenFolioDialog(false);

    const handleAddFolio = (folioData) => {
        setFormData(prev => ({
            ...prev,
            folioNumber: folioData.folio,
            certificateNumber: folioData.certificate
        }));
    };

    const handleAddAuthorizationFolio = () => {
        // This will be implemented when we add the authorization table functionality
    };

    const downloadPDF = async () => {
        const element = document.getElementById('isr-form-content');
        const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff'
        });
        
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        
        const imgWidth = 210;
        const pageHeight = 295;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        
        let position = 0;
        
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        
        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }
        
        pdf.save('ISR-Form.pdf');
    };

    return (
        <Box id="isr-form-content" sx={{ maxWidth: "1000px", mx: "auto", p: 3 }}>
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
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                        <FormControlLabel 
                                            control={<Checkbox checked={formData.pan} onChange={() => handleCheckboxChange('pan')} />} 
                                            label="PAN" 
                                        />
                                    </TableCell>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                        <FormControlLabel 
                                            control={<Checkbox checked={formData.bankDetails} onChange={() => handleCheckboxChange('bankDetails')} />} 
                                            label="Bank Details" 
                                        />
                                    </TableCell>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                        <FormControlLabel 
                                            control={<Checkbox checked={formData.signature} onChange={() => handleCheckboxChange('signature')} />} 
                                            label="Signature" 
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                        <FormControlLabel 
                                            control={<Checkbox checked={formData.mobileNumber} onChange={() => handleCheckboxChange('mobileNumber')} />} 
                                            label="Mobile Number" 
                                        />
                                    </TableCell>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                        <FormControlLabel 
                                            control={<Checkbox checked={formData.emailId} onChange={() => handleCheckboxChange('emailId')} />} 
                                            label="E-mail ID" 
                                        />
                                    </TableCell>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                        <FormControlLabel 
                                            control={<Checkbox checked={formData.address} onChange={() => handleCheckboxChange('address')} />} 
                                            label="Address" 
                                        />
                                    </TableCell>
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
                                                <Select 
                                                    labelId="company-select-label" 
                                                    value={formData.selectedCompany} 
                                                    onChange={(e) => handleInputChange('selectedCompany', e.target.value)}
                                                    label="Select Company"
                                                >
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
                                                {formData.folioNumber ? `Folio: ${formData.folioNumber}` : 'No folio details. Click on Add Folio'}
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
                                                value={formData.firstHolder}
                                                onChange={(e) => handleInputChange('firstHolder', e.target.value)}
                                                fullWidth
                                            />
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                            <Typography variant="body2" sx={{ minWidth: '20px', mr: 2 }}>2</Typography>
                                            <TextField
                                                variant="outlined"
                                                size="small"
                                                placeholder="Second Holder"
                                                value={formData.secondHolder}
                                                onChange={(e) => handleInputChange('secondHolder', e.target.value)}
                                                fullWidth
                                            />
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant="body2" sx={{ minWidth: '20px', mr: 2 }}>3</Typography>
                                            <TextField
                                                variant="outlined"
                                                size="small"
                                                placeholder="Third Holder"
                                                value={formData.thirdHolder}
                                                onChange={(e) => handleInputChange('thirdHolder', e.target.value)}
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
                                        <Checkbox checked={formData.pan} onChange={() => handleCheckboxChange('pan')} />
                                    </TableCell>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", verticalAlign: "top" }}>
                                        <Typography variant="body2" gutterBottom>
                                            PAN of (all) the (joint) holder(s)
                                        </Typography>
                                        <Box sx={{ pl: 2 }}>
                                            <Typography variant="body2" gutterBottom>
                                                PAN
                                            </Typography>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                                                <Typography variant="body2" sx={{ minWidth: "20px" }}>1</Typography>
                                                <TextField
                                                    variant="outlined"
                                                    size="small"
                                                    placeholder="First Holder PAN"
                                                    value={formData.panFirstHolder}
                                                    onChange={(e) => handleInputChange('panFirstHolder', e.target.value)}
                                                    fullWidth
                                                />
                                            </Box>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                                                <Typography variant="body2" sx={{ minWidth: "20px" }}>2</Typography>
                                                <TextField
                                                    variant="outlined"
                                                    size="small"
                                                    placeholder="Second Holder PAN"
                                                    value={formData.panSecondHolder}
                                                    onChange={(e) => handleInputChange('panSecondHolder', e.target.value)}
                                                    fullWidth
                                                />
                                            </Box>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                                                <Typography variant="body2" sx={{ minWidth: "20px" }}>3</Typography>
                                                <TextField
                                                    variant="outlined"
                                                    size="small"
                                                    placeholder="Third Holder PAN"
                                                    value={formData.panThirdHolder}
                                                    onChange={(e) => handleInputChange('panThirdHolder', e.target.value)}
                                                    fullWidth
                                                />
                                            </Box>
                                            <Typography variant="body2">
                                                Whether it is Valid (linked to Aadhaar):
                                            </Typography>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 1 }}>
                                                <FormControlLabel 
                                                    control={<Checkbox checked={formData.panValidLinked} onChange={() => handleCheckboxChange('panValidLinked')} />} 
                                                    label="Yes" 
                                                />
                                                <FormControlLabel 
                                                    control={<Checkbox checked={formData.panNotValidLinked} onChange={() => handleCheckboxChange('panNotValidLinked')} />} 
                                                    label="No" 
                                                />
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
                                        <TextField 
                                            variant="outlined" 
                                            size="small" 
                                            placeholder="NSDL DPID Client ID / CDSL Client ID" 
                                            value={formData.dematAccount}
                                            onChange={(e) => handleInputChange('dematAccount', e.target.value)}
                                            fullWidth 
                                        />
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
                                        <Checkbox checked={formData.address} onChange={() => handleCheckboxChange('address')} />
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
                                            ].map((item, index) => {
                                                const checkboxFields = ['uidAadhaar', 'passportLease', 'flatMaintenance', 'utilityBills', 'identityCard', 'fiiPowerOfAttorney', 'spouseProof', 'clientMasterList'];
                                                return (
                                                    <Box key={index} sx={{ display: "flex", alignItems: "flex-start", mb: 1 }}>
                                                        <Checkbox 
                                                            size="small" 
                                                            sx={{ mt: -0.5, mr: 1 }} 
                                                            checked={formData[checkboxFields[index]]}
                                                            onChange={() => handleCheckboxChange(checkboxFields[index])}
                                                        />
                                                        <Typography variant="body2">{item}</Typography>
                                                    </Box>
                                                );
                                            })}
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
                                        <Checkbox checked={formData.bankDetails} onChange={() => handleCheckboxChange('bankDetails')} />
                                    </TableCell>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", verticalAlign: "top" }}>
                                        <Typography variant="body2" gutterBottom>
                                            Bank details
                                        </Typography>
                                        <Box sx={{ pl: 1, mt: 1 }}>
                                            <Box sx={{ display: "flex", alignItems: "flex-start", mb: 1 }}>
                                                <TextField 
                                                    variant="outlined" 
                                                    size="small" 
                                                    placeholder="IFSC Code" 
                                                    value={formData.ifscCode}
                                                    onChange={(e) => handleInputChange('ifscCode', e.target.value)}
                                                    fullWidth 
                                                />
                                            </Box>
                                            <Box sx={{ display: "flex", alignItems: "flex-start", mb: 1 }}>
                                                <TextField 
                                                    variant="outlined" 
                                                    size="small" 
                                                    placeholder="Account Number" 
                                                    value={formData.accountNumber}
                                                    onChange={(e) => handleInputChange('accountNumber', e.target.value)}
                                                    fullWidth 
                                                />
                                            </Box>
                                            <Box sx={{ display: "flex", alignItems: "flex-start", mb: 1 }}>
                                                <TextField 
                                                    variant="outlined" 
                                                    size="small" 
                                                    placeholder="Bank Name" 
                                                    value={formData.bankName}
                                                    onChange={(e) => handleInputChange('bankName', e.target.value)}
                                                    fullWidth 
                                                />
                                            </Box>
                                            <Box sx={{ display: "flex", alignItems: "flex-start", mb: 1 }}>
                                                <TextField 
                                                    variant="outlined" 
                                                    size="small" 
                                                    placeholder="Branch Name" 
                                                    value={formData.branchName}
                                                    onChange={(e) => handleInputChange('branchName', e.target.value)}
                                                    fullWidth 
                                                />
                                            </Box>
                                            <Typography variant="body2">
                                                Provide the following:
                                            </Typography>
                                            <Box sx={{ mt: 1 }}>
                                                <FormControlLabel 
                                                    control={<Checkbox checked={formData.cancelledCheque} onChange={() => handleCheckboxChange('cancelledCheque')} />} 
                                                    label="Original cancelled cheque bearing the name of the security holder; OR" 
                                                />
                                                <FormControlLabel 
                                                    control={<Checkbox checked={formData.bankPassbook} onChange={() => handleCheckboxChange('bankPassbook')} />} 
                                                    label="Bank passbook/statement attested by the Bank;" 
                                                />
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
                                        <Checkbox checked={formData.emailId} onChange={() => handleCheckboxChange('emailId')} />
                                    </TableCell>
                                    <TableCell colSpan={2} sx={{ border: "1px solid rgba(0,0,0,0.12)", verticalAlign: "top" }}>
                                        <Typography variant="body2" gutterBottom>
                                            E-mail address #
                                        </Typography>
                                        <Box sx={{ pl: 1, mt: 1 }}>
                                            <TextField 
                                                variant="outlined" 
                                                size="small" 
                                                placeholder="eMail Address" 
                                                value={formData.emailAddress}
                                                onChange={(e) => handleInputChange('emailAddress', e.target.value)}
                                                fullWidth 
                                            />
                                        </Box>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", textAlign: "center", verticalAlign: "top" }}>
                                        6
                                    </TableCell>
                                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", textAlign: "center", verticalAlign: "top" }}>
                                        <Checkbox checked={formData.mobileNumber} onChange={() => handleCheckboxChange('mobileNumber')} />
                                    </TableCell>
                                    <TableCell colSpan={2} sx={{ border: "1px solid rgba(0,0,0,0.12)", verticalAlign: "top" }}>
                                        <Typography variant="body2" gutterBottom>
                                            Mobile #
                                        </Typography>
                                        <Box sx={{ pl: 1, mt: 1 }}>
                                            <TextField 
                                                variant="outlined" 
                                                size="small" 
                                                placeholder="Mobile Number" 
                                                value={formData.mobileNumber}
                                                onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                                                fullWidth 
                                            />
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
                                        <InputLabel id="auth-company-select-label">Select Company</InputLabel>
                                        <Select labelId="auth-company-select-label" value="">
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
                                    <Button variant="contained" color="primary" sx={{ textTransform: 'none' }} size="small" onClick={handleAddAuthorizationFolio}>Add</Button>
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
                                    <TextField 
                                        variant="outlined" 
                                        size="small" 
                                        placeholder="Address Line 1" 
                                        value={formData.holder1Address1}
                                        onChange={(e) => handleInputChange('holder1Address1', e.target.value)}
                                        fullWidth 
                                    />
                                </TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                    <TextField 
                                        variant="outlined" 
                                        size="small" 
                                        placeholder="Address Line 1" 
                                        value={formData.holder2Address1}
                                        onChange={(e) => handleInputChange('holder2Address1', e.target.value)}
                                        fullWidth 
                                    />
                                </TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                    <TextField 
                                        variant="outlined" 
                                        size="small" 
                                        placeholder="Address Line 1" 
                                        value={formData.holder3Address1}
                                        onChange={(e) => handleInputChange('holder3Address1', e.target.value)}
                                        fullWidth 
                                    />
                                </TableCell>
                            </TableRow>

                            {/* Full Address - Line 2 */}
                            <TableRow>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}></TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                    <TextField 
                                        variant="outlined" 
                                        size="small" 
                                        placeholder="Address Line 2" 
                                        value={formData.holder1Address2}
                                        onChange={(e) => handleInputChange('holder1Address2', e.target.value)}
                                        fullWidth 
                                    />
                                </TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                    <TextField 
                                        variant="outlined" 
                                        size="small" 
                                        placeholder="Address Line 2" 
                                        value={formData.holder2Address2}
                                        onChange={(e) => handleInputChange('holder2Address2', e.target.value)}
                                        fullWidth 
                                    />
                                </TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                    <TextField 
                                        variant="outlined" 
                                        size="small" 
                                        placeholder="Address Line 2" 
                                        value={formData.holder3Address2}
                                        onChange={(e) => handleInputChange('holder3Address2', e.target.value)}
                                        fullWidth 
                                    />
                                </TableCell>
                            </TableRow>

                            {/* Full Address - Line 3 */}
                            <TableRow>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}></TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                    <TextField 
                                        variant="outlined" 
                                        size="small" 
                                        placeholder="Address Line 3" 
                                        value={formData.holder1Address3}
                                        onChange={(e) => handleInputChange('holder1Address3', e.target.value)}
                                        fullWidth 
                                    />
                                </TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                    <TextField 
                                        variant="outlined" 
                                        size="small" 
                                        placeholder="Address Line 3" 
                                        value={formData.holder2Address3}
                                        onChange={(e) => handleInputChange('holder2Address3', e.target.value)}
                                        fullWidth 
                                    />
                                </TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                    <TextField 
                                        variant="outlined" 
                                        size="small" 
                                        placeholder="Address Line 3" 
                                        value={formData.holder3Address3}
                                        onChange={(e) => handleInputChange('holder3Address3', e.target.value)}
                                        fullWidth 
                                    />
                                </TableCell>
                            </TableRow>

                            {/* PIN Code and City Row */}
                            <TableRow>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>PIN Code</TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={6}>
                                            <TextField 
                                                variant="outlined" 
                                                size="small" 
                                                placeholder="City Name" 
                                                value={formData.holder1City}
                                                onChange={(e) => handleInputChange('holder1City', e.target.value)}
                                                fullWidth 
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField 
                                                variant="outlined" 
                                                size="small" 
                                                placeholder="PIN Code" 
                                                value={formData.holder1PinCode}
                                                onChange={(e) => handleInputChange('holder1PinCode', e.target.value)}
                                                fullWidth 
                                            />
                                        </Grid>
                                    </Grid>
                                </TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={6}>
                                            <TextField 
                                                variant="outlined" 
                                                size="small" 
                                                placeholder="City Name" 
                                                value={formData.holder2City}
                                                onChange={(e) => handleInputChange('holder2City', e.target.value)}
                                                fullWidth 
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField 
                                                variant="outlined" 
                                                size="small" 
                                                placeholder="PIN Code" 
                                                value={formData.holder2PinCode}
                                                onChange={(e) => handleInputChange('holder2PinCode', e.target.value)}
                                                fullWidth 
                                            />
                                        </Grid>
                                    </Grid>
                                </TableCell>
                                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={6}>
                                            <TextField 
                                                variant="outlined" 
                                                size="small" 
                                                placeholder="City Name" 
                                                value={formData.holder3City}
                                                onChange={(e) => handleInputChange('holder3City', e.target.value)}
                                                fullWidth 
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField 
                                                variant="outlined" 
                                                size="small" 
                                                placeholder="PIN Code" 
                                                value={formData.holder3PinCode}
                                                onChange={(e) => handleInputChange('holder3PinCode', e.target.value)}
                                                fullWidth 
                                            />
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
                    onClick={downloadPDF}
                    sx={{ textTransform: 'none', backgroundColor: '#3a4385' }}
                >
                    Download PDF Form
                </Button>
            </Box>
            <AddFolio open={openFolioDialog} onClose={handleClose} onSave={handleAddFolio} />
        </Box>
    );
}
export default ISRForm;