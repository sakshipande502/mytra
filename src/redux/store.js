import { configureStore } from "@reduxjs/toolkit";
import { cardReducer } from "./reducers";

const store = configureStore({
    reducer:{
        card:cardReducer,
    },
})

export default store;

