import { combineReducers } from "redux";
import textReducer from "./features/text/textSlice";
import employeesReducer from "./features/employees/employeesSlice";

export default function createRootReducer() {
    return combineReducers({
        text: textReducer,
        employees: employeesReducer
    });
}