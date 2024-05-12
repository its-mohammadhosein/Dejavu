
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import toDO from "./toDO";
export const store = configureStore({
    reducer: {
        counter: counterSlice,
        todo: toDO
    },
});

