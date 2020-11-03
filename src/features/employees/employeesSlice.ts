import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// eslint-disable-next-line import/no-cycle
import { RootState } from "../../store";

export interface IEmployee {
    nodeid: number;
    parent: number;
    firstname: string;
    lastname: string;
    employeeTitle: string;
    location: string;
    deskNumber: number;
    outOfOffice: boolean;
}

interface IEmployeeCollection {
    list: IEmployee[];
}

const initialState: IEmployeeCollection = { list: [] };

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<IEmployeeCollection>) => {
      state.list = action.payload.list;
    },
    clear: (state) => {
        state = initialState;
      },
  },
});

export const { set, clear } = employeesSlice.actions;

export default employeesSlice.reducer;

export const employeesState = (state: RootState) => state.employees.list;
 