import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axios/Instance";

const baseURL=instance

export const FetchPost = createAsyncThunk('Fetch/post',async()=>{ 
    let response = (await baseURL.get('/posts')).data
    return response
})


const PostSlice= createSlice({
    name:'posts',
    initialState:{
        tag:[],
        data:[],
        status:'Idle',
        error:null,
    },
    reducers:{
    },
    extraReducers:(builder)=>{
       builder.addCase(FetchPost.pending,(state)=>{
        state.status='pending'
    }).addCase(FetchPost.rejected,(state,action)=>{
        state.error=action.payload
    }).addCase(FetchPost.fulfilled,(state,action)=>{
        state.data=action.payload
    })
    }
})
export default PostSlice.reducer