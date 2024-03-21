'use client'
// Import necessary modules and components
import React, { useState } from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import RegularStudent from './regularstudent/page';
import ExternalStudent from './externalstudent/page';

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
            <PageHeading heading="Bank Details" />

            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Regular Student" id="simple-tab-0" />
                <Tab label="External Student" id="simple-tab-1" />
            </Tabs>
            {value === 0 && <RegularStudent />}
            {value === 1 && <ExternalStudent />}
        </Container>
    );
};

export default BankDetails;