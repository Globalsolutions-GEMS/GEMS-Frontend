'use client'
import React from "react";
import { Card, Dropdown } from 'react-bootstrap';
import { MoreVertical } from 'react-feather';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const CasteCategoryWiseStrength = () => {
    const strengthChartSeries = [65, 30, 5];
    const strengthChartOptions = {
        chart: {
            type: 'donut',
            fontFamily: 'Arial, sans-serif',
            height: '100%'
        },
        colors: ['#007bff', '#28a745', '#dc3545'],
        labels: ['General', 'OBC', 'SC/ST'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
            className="text-muted text-primary-hover">
            {children}
        </a>
    ));

    CustomToggle.displayName = 'CustomToggle';

    const ActionMenu = () => {
        return (
            <Dropdown>
                <Dropdown.Toggle as={CustomToggle}>
                    <MoreVertical size="15px" className="text-muted" />
                </Dropdown.Toggle>
                <Dropdown.Menu align={'end'}>
                    <Dropdown.Item eventKey="1">
                        Action
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="2">
                        Another action
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="3">
                        Something else here
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    };

    return (
        <Card className="h-100">
            <Card.Body>
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <h4 className="mb-0">Caste Category Wise Strength</h4>
                    </div>
                    <ActionMenu />
                </div>
                <div >
                    <Chart
                        options={strengthChartOptions}
                        series={strengthChartSeries}
                        type="donut"
                        width="100%"
                    />
                </div>
                {/* icon with content  */}
                <div className="d-flex align-items-center justify-content-around">
                    <div className="text-center">
                        <h1 className="mt-3  mb-1 fw-bold">65%</h1>
                        <p>General</p>
                    </div>
                    <div className="text-center">
                        <h1 className="mt-3  mb-1 fw-bold">30%</h1>
                        <p>OBC</p>
                    </div>
                    <div className="text-center">
                        <h1 className="mt-3  mb-1 fw-bold">5%</h1>
                        <p>SC/ST</p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default CasteCategoryWiseStrength;
