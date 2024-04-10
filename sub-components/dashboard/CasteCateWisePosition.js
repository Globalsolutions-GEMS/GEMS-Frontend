'use client'
import React from "react";
import Link from 'next/link';
import { Card, Dropdown } from 'react-bootstrap';
import { MoreVertical } from 'react-feather';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


const CasteCategoryWise = () => {
    const perfomanceChartSeries = [100, 78, 89, 74];
    const perfomanceChartOptions = {
        dataLabels: { enabled: !1 },
        labels: ['Direct', 'Referral', 'Organic', 'Referral'],
        colors: ['#28a745', '#ffc107', '#dc3545', '#1e81b0'],
        plotOptions: {
            radialBar: {
                startAngle: -168,
                endAngle: -450,
                hollow: {
                    size: '55%',
                },
                track: {
                    background: 'transaprent',
                },
                dataLabels: {
                    show: false,
                }
            }
        },
        chart: { type: 'radialBar' },
        stroke: { lineCap: "round" },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        height: 300
                    }
                }
            },
            {
                breakpoint: 5000,
                options: {
                    chart: {
                        height: 320
                    }
                }
            }
        ]
    };

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        (<Link
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
            className="text-muted text-primary-hover">
            {children}
        </Link>)
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
                <div className="mb-8">
                    <Chart
                        options={perfomanceChartOptions}
                        series={perfomanceChartSeries}
                        type="radialBar"
                        width="100%"
                    />
                </div>
                {/* icon with content  */}
                <div className="d-flex align-items-center justify-content-around">
                    <div className="text-center">
                        <i className=" text-success fs-3"></i>
                        <h1 className="mt-3  mb-1 fw-bold">76%</h1>
                        <p>Open</p>
                    </div>
                    <div className="text-center">
                        <i className=" text-warning fs-3"></i>
                        <h1 className="mt-3  mb-1 fw-bold">32%</h1>
                        <p>OBC</p>
                    </div>
                    <div className="text-center">
                        <i className=" text-danger fs-3"></i>
                        <h1 className="mt-3  mb-1 fw-bold">13%</h1>
                        <p>ST</p>
                    </div>
                    <div className="text-center">
                        <i className=" fs-3"></i>
                        <h1 className="mt-3  mb-1 fw-bold">13%</h1>
                        <p>NT</p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default CasteCategoryWise