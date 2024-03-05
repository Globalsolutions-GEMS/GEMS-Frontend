'use client'
// Import necessary modules and components
import React, { useState } from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
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
            <PageHeading heading="Bank Details" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Master</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Academic Master</Breadcrumb.Item>
                <Breadcrumb.Item active>Bank Details</Breadcrumb.Item>
            </Breadcrumb>

            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Bank" id="simple-tab-0" />
                <Tab label="Bank Account" id="simple-tab-1" />
            </Tabs>
            {value === 0 && <Bank />}
            {value === 1 && <BankAccount />}
        </Container>
    );
};

export default BankDetails;