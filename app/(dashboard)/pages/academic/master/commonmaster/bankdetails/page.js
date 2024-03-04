"use client";
// Import necessary modules and components
import React, { useState } from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Bank from '../bankdetails/bank/page';
import BankAccount from '../bankdetails/bankaccount/page';

// Define the BankDetails component
const BankDetails = () => {
    // Use useState hook for managing tab value
    const [value, setValue] = useState(0);

    // Handle tab change
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container fluid className="p-6">
            {/* Page Heading */}
            <PageHeading heading="Bank Details" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Master</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Academic Master</Breadcrumb.Item>
                <Breadcrumb.Item active>Bank Details</Breadcrumb.Item>
            </Breadcrumb>

            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                        <Tab label="Bank" id="simple-tab-0" aria-controls="simple-tabpanel-0" />
                        <Tab label="Bank Account" id="simple-tab-1" aria-controls="simple-tabpanel-1" />
                    </Tabs>
                </Box>
                {/* Render content based on selected tab */}
                <div role="tabpanel" hidden={value !== 0} id="simple-tabpanel-0" aria-labelledby="simple-tab-0">
                    {value === 0 && (
                        <Box sx={{ p: 3 }}>
                            <Typography><Bank /></Typography>
                        </Box>
                    )}
                </div>
                <div role="tabpanel" hidden={value !== 1} id="simple-tabpanel-1" aria-labelledby="simple-tab-1">
                    {value === 1 && (
                        <Box sx={{ p: 3 }}>
                            <Typography><BankAccount /></Typography>
                        </Box>
                    )}
                </div>
            </Box>
        </Container>
    );
};

export default BankDetails;
