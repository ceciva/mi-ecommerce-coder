import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {base_url} from "../firebase/database";

export const ecApi = createApi ({
    reducePath: "ecApi",
    baseQuery: fetchBaseQuery({
        baseUrl:base_url,
    }),
    endpoints:(builder)=>({
        getCategories: builder.query({
            query: ()=> "categorias.json",
        }),
    
        getProducts: builder.query({
            query: ()=> "productos.json",
        })
    }),   
});

export const { useGetCategoriesQuery, useGetProductsQuery} = ecApi;