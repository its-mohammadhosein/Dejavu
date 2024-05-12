import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        users: [],

    },
    reducers: {
        createUser: (state, action) => {

            state.users.push(action.payload);
        },
        deletuser: (state) => {

            state.users.pop();
        },

    }
});

export const { createUser, deletuser } = counterSlice.actions;




export default counterSlice.reducer;