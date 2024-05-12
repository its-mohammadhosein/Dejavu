import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'todo',
    initialState: {
        todo: [],

    },
    reducers: {
        createtodo: (state, action) => {

            state.todo.push(action.payload);
        },
        delettodo: (state) => {

            state.todo.pop();
        },

    }
});

export const { createtodo, delettodo } = counterSlice.actions;




export default counterSlice.reducer;