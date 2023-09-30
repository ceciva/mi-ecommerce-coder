import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./slices/homeSlice";
import { ecApi } from "../servicios/ecApi";
import authSlice from "./slices/authSlice";

export const store= configureStore({
    reducer: { 
        homeSlice,
        [ecApi.reducerPath]: ecApi.reducer,
        authSlice,
        

    },
    middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware().concat(ecApi.middleware),  
});