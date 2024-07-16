import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "../feature/post/PostSlice";
import tagReducer from "../feature/tags/tagSlice";

export const store = configureStore({
    reducer:{
        posts:PostReducer,
        tagList:tagReducer,
    }
})