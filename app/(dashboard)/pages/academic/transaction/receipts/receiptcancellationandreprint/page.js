"use client";
// import node module libraries
import { Breadcrumb, Container } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

import ReceiptCancel from './receiptcancel'
import ReceiptReprint from './receiptreprint'
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ReceiptCancelAndReprint = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Receipt Cancel and Reprint" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Transactionn</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Receipts</Breadcrumb.Item>
        <Breadcrumb.Item active>Receipt Cancel and Reprint</Breadcrumb.Item>
      </Breadcrumb>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
          >
            <Tab label="Cancel Receipt" {...a11yProps(0)}></Tab>
            <Tab label="Reprint Receipt" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}><ReceiptCancel/></CustomTabPanel>
        <CustomTabPanel value={value} index={1}><ReceiptReprint/></CustomTabPanel>
      </Box>
    </Container>
  );
};

export default ReceiptCancelAndReprint;
