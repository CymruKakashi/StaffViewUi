import React from "react";
import Home from "../components/Home";
import Text from "../features/text/Text";
import Employees from "../features/employees/Employees";

export default function HomePage(): JSX.Element {
    return (
    <>
        <Home/>
        <Employees/>
    </>);
}