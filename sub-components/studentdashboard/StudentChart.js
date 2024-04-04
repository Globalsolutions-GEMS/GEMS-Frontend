"use client";

import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";

class StudentChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Chart: null
    };
  }

  componentDidMount() {
    // Dynamically import Chart component only in browser environment
    if (typeof window !== 'undefined') {
      import("react-apexcharts").then((module) => {
        this.setState({ Chart: module.default });
      });
    }
  }

  render() {
    const { Chart } = this.state;

    return (
      <Row className="mt-6">
        <Col md={12} xs={12}>
          <Card>
            <Card.Header className="bg-white   py-4">
              <h4 className="mb-0">Semester Wise Result</h4>
            </Card.Header>
            {/* Render Chart component if it's available */}
            {Chart && (
              <Chart
                options={{
                  chart: {
                    id: "basic-bar",
                  },
                  xaxis: {
                    categories: [
                      "SYBSC SEMESTER III",
                      "TYBSC SEMESTER V",
                      "TYBSC SEMESTER VI",
                    ],
                  },
                }}
                series={[
                  {
                    name: "Percentage",
                    data: [90, 90, 93],
                  },
                ]}
                type="bar"
                width="500"
              />
            )}
          </Card>
        </Col>
      </Row>
    );
  }
}

export default StudentChart;
