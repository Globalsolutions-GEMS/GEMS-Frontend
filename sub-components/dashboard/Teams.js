// import node module libraries
import React from "react";
import Link from 'next/link';
import { Card, Table, Dropdown, Image } from 'react-bootstrap';
import { MoreVertical } from 'react-feather';

// import required data files
import TeamsData from "data/dashboard/TeamsData";

const Teams = () => {

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
            <Card.Header className="bg-white py-4">
                <h4 className="mb-0">Program Wise Admissions</h4>
            </Card.Header>
            <Table responsive className="text-nowrap">
                <thead className="table-light">
                    <tr>
                        <th>Programme</th>
                        <th>Intake</th>
                        <th>Admission</th>
                        <th>Vacant</th>
                        <th>Progress</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {TeamsData.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td className="align-middle">
                                    <div className="d-flex align-items-center">
                                        <div >
                                            <h5 className=" mb-1">{item.programme}</h5>
                                            <p className="mb-0">{item.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle">{item.intake}</td>
                                <td className="align-middle">{item.admission}</td>
                                <td className="align-middle">{item.vacant}</td>
                                <td className="align-middle">{item.progress}</td>
                                <td className="align-middle">
                                    <ActionMenu />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Card>
    )
}

export default Teams