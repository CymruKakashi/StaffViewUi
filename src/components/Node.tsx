import React from "react";
import "./Node.scss";
import { IEmployee } from "./../features/employees/employeesSlice";

interface NodeProps {
    employee: IEmployee;
    children: IEmployee[];
    parent: IEmployee | null | undefined;
    biggerSeat?: boolean | null | undefined;
}
export default class Node extends React.Component<NodeProps> {
    public getFullName(employee: IEmployee | undefined | null)
    {
        return employee?.firstname + " " + employee?.lastname;
    }

    public render() {
        let css = "normal-seat";
        if (this.props.biggerSeat) {
            css = "big-seat";
        }
        if (this.props.employee.outOfOffice) {
            css = css + " vacant-seat"; 
        }
        return (
        <>
            <div className={css}>
                <div id="container" className="ml-1">
                    <h5>{this.getFullName(this.props.employee)}</h5>
                    <h6>{"Manager: " + this.getFullName(this.props.parent)}</h6>
                    <h5 id="footer">{this.props.employee.deskNumber}</h5>
                </div>
            </div>
        </>
        );
    }
}