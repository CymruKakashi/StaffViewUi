import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Button, Col } from "react-bootstrap";
import {
    set,
    IEmployee,
    employeesState
} from "./../employees/employeesSlice";
import "./Employees.scss";
import Node from "./../../components/Node";

export default function Employees()  {
    const dispatch = useDispatch();
    const employees: IEmployee[] = useSelector(employeesState);
    const getEmployee = (desknumber: number) => employees.find(x => x.deskNumber === desknumber);
    const getEmployeeChildren = (desknumber: number) => {
        const employee = getEmployee(desknumber);
        return employees.filter(x => x.parent === employee?.nodeid);   
    };
    const getParent = (desknumber: number) => {
        const employee = getEmployee(desknumber);
        if (employee) {
            return employees.find(x => x.nodeid === (employee as IEmployee).parent);
        }
            
    };
    
    useEffect(() => {
        const getData = async () => { 
            await fetch("https://localhost:44391/employee")
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                dispatch(set({list: result}));
            },
            (error) => {console.log(error); });
        };
        getData();
     }, []);

    return (
        <>
            <Container fluid>
                {employees.length > 0 &&
                    <>
                        <Row>
                            <Col>
                                <Row>
                                    <Node employee={getEmployee(14) as IEmployee} children={getEmployeeChildren(14)} parent={getParent(14)}></Node>
                                    <Node employee={getEmployee(15) as IEmployee} children={getEmployeeChildren(15)} parent={getParent(15)}></Node>
                                </Row>
                                <Row>
                                    <Node employee={getEmployee(13) as IEmployee} children={getEmployeeChildren(13)} parent={getParent(13)}></Node>
                                    <Node employee={getEmployee(16) as IEmployee} children={getEmployeeChildren(16)} parent={getParent(16)}></Node>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Node employee={getEmployee(18) as IEmployee} children={getEmployeeChildren(18)} parent={getParent(18)}></Node>
                                    <Node employee={getEmployee(19) as IEmployee} children={getEmployeeChildren(19)} parent={getParent(19)}></Node>
                                </Row>
                                <Row>
                                    <Node employee={getEmployee(17) as IEmployee} children={getEmployeeChildren(17)} parent={getParent(17)}></Node>
                                    <Node employee={getEmployee(20) as IEmployee} children={getEmployeeChildren(20)} parent={getParent(20)}></Node>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Node employee={getEmployee(22) as IEmployee} children={getEmployeeChildren(22)} parent={getParent(22)}></Node>
                                    <Node employee={getEmployee(23) as IEmployee} children={getEmployeeChildren(23)} parent={getParent(23)}></Node>
                                </Row>
                                <Row>
                                    <Node employee={getEmployee(21) as IEmployee} children={getEmployeeChildren(21)} parent={getParent(21)}></Node>
                                    <Node employee={getEmployee(24) as IEmployee} children={getEmployeeChildren(24)} parent={getParent(24)}></Node>
                                </Row>
                            </Col>
                            <Col>
                                <Node employee={getEmployee(25) as IEmployee} children={getEmployeeChildren(25)} parent={getParent(25)} biggerSeat={true}></Node>
                            </Col>
                        </Row>
                        <Row className="spacer"></Row>
                        <Row>
                            <Col>
                                <Row>
                                    <Node employee={getEmployee(2) as IEmployee} children={getEmployeeChildren(2)} parent={getParent(2)}></Node>
                                    <Node employee={getEmployee(3) as IEmployee} children={getEmployeeChildren(3)} parent={getParent(3)}></Node>
                                </Row>
                                <Row>
                                    <Node employee={getEmployee(1) as IEmployee} children={getEmployeeChildren(1)} parent={getParent(1)}></Node>
                                    <Node employee={getEmployee(4) as IEmployee} children={getEmployeeChildren(4)} parent={getParent(4)}></Node>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Node employee={getEmployee(6) as IEmployee} children={getEmployeeChildren(6)} parent={getParent(6)}></Node>
                                    <Node employee={getEmployee(7) as IEmployee} children={getEmployeeChildren(7)} parent={getParent(7)}></Node>
                                </Row>
                                <Row>
                                    <Node employee={getEmployee(5) as IEmployee} children={getEmployeeChildren(5)} parent={getParent(5)}></Node>
                                    <Node employee={getEmployee(8) as IEmployee} children={getEmployeeChildren(8)} parent={getParent(8)}></Node>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Node employee={getEmployee(10) as IEmployee} children={getEmployeeChildren(10)} parent={getParent(10)}></Node>
                                    <Node employee={getEmployee(11) as IEmployee} children={getEmployeeChildren(11)} parent={getParent(11)}></Node>
                                </Row>
                                <Row>
                                    <Node employee={getEmployee(9) as IEmployee} children={getEmployeeChildren(9)} parent={getParent(9)}></Node>
                                    <Node employee={getEmployee(12) as IEmployee} children={getEmployeeChildren(12)} parent={getParent(12)}></Node>
                                </Row>
                            </Col>
                            <Col>
                                <Node employee={getEmployee(26) as IEmployee} children={getEmployeeChildren(26)} parent={getParent(26)} biggerSeat={true}></Node>
                            </Col>
                        </Row>
                    </>
                }
            </Container>
        </>
    );
}
