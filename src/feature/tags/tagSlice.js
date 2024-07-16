import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import instance from "../../axios/Instance"

const baseURL=instance

export const GetTags = createAsyncThunk('get/tags',async()=>{
    let response = (await baseURL.get('/posts/tag-list')).data
    return response
})

const tagSlice= createSlice({
    name:'tagList',
    initialState:{
        tag:[],
        status:'idle',
        error:null,
    },
    reducers:{
    },
    extraReducers:(builder)=>
        builder.addCase(GetTags.fulfilled,(state,action)=>{
        state.tag=action.payload
    })
})
export default tagSlice.reducer
