import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVideoData=createAsyncThunk('fetch/videos',async()=>{
    const response=await axios.get("https://play-tube-backend-sigma.vercel.app/videos");
    return response.data;
})

export const videoDataSlice=createSlice({
    name:'videoData',
    initialState:{
        videoData:[],
        status:'idle',
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchVideoData.pending,(state)=>{
            state.status='pending'
        })
        .addCase(fetchVideoData.fulfilled,(state,action)=>{
            state.status='fulfilled'
            state.videoData=action.payload
        })
        .addCase(fetchVideoData.rejected,state=>{
            state.status='rejected'
        })
    }
})
export default videoDataSlice.reducer;