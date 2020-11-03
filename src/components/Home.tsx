import React from "react";
import { Navbar } from "react-bootstrap";
import "./Home.scss";

export default class Home extends React.Component {
    public render() {
        return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand href="#">Staff View</Navbar.Brand>
            </Navbar>
        </>
        );
    }
}