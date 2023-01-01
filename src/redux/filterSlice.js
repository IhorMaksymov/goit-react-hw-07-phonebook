import { createSlice } from "@reduxjs/toolkit";

const contactFilter = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        valueContactFilter(_, action) {
            return action.payload;
        }
    }
});


export const { valueContactFilter } = contactFilter.actions;

export const filterReducer = contactFilter.reducer;