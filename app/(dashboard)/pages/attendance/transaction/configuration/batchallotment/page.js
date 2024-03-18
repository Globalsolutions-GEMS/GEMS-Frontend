'use client'
// Import necessary modules and components
import React, { useState } from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TheoryBatchAllotment from './theorybatchallotment/page';
import PracticalBatchAllotment from './practicalbatchallotment/page';

// Define the BankDetails component
const BatchAllotment = () => {
    // Use useState hook for managing tab value
    const [value, setValue] = useState(0);

    // Handle tab change
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container fluid className="p-6">
            <PageHeading heading="Batch Allotment" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Attendance</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Transaction</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Configuration</Breadcrumb.Item>
                <Breadcrumb.Item active>Batch Allotment</Breadcrumb.Item>
            </Breadcrumb>

            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Theory Batch Allotment" id="simple-tab-0" />
                <Tab label="Practical Batch Allotment" id="simple-tab-1" />
            </Tabs>
            {value === 0 && <TheoryBatchAllotment />}
            {value === 1 && <PracticalBatchAllotment />}
        </Container>
    );
};

export default BatchAllotment;