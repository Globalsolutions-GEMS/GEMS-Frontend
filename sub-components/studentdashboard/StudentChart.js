import React, { Component } from "react";
import Chart from "react-apexcharts";
import {  Card,Row,Col } from "react-bootstrap";

class StudentChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
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
      },
      series: [
        {
          name: "Percentage",
          data: [90, 90, 93],
        },
      ],
    };
  }

  render() {
    return (
      <Row className="mt-6">
        <Col md={12} xs={12}>
          <Card>
            <Card.Header className="bg-white   py-4">
              <h4 className="mb-0">Semester Wise Result</h4>
            </Card.Header>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </Card>
        </Col>
      </Row>
    );
  }
}

export default StudentChart;
