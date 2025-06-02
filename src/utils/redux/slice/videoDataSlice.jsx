import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVideoData=createAsyncThunk('fetch/videos',async()=>{
    const response=await axios.get("https://play-tube-backend-sigma.vercel.app/videos");
    return response.data;
})
export const fetchVideo=createAsyncThunk("get/video",async(id)=>{
    const response=await axios.get(`https://play-tube-backend-sigma.vercel.app/videos/${id}`);
    return response.data;
})

export const videoDataSlice=createSlice({
    name:'videos',
    initialState:{
        videos:[],
        video:{},
        status:'idle',
        error:null
    },
    reducers:{
        clearVideo:(state)=>{
            state.video={}
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchVideoData.pending,(state)=>{
            state.status='pending'
        })
        .addCase(fetchVideoData.fulfilled,(state,action)=>{
            state.status='fulfilled'
            state.videos=action.payload
        })
        .addCase(fetchVideoData.rejected,state=>{
            state.status='rejected'
        })
         .addCase(fetchVideo.pending,state=>{
            state.status="pending"
        })
        .addCase(fetchVideo.fulfilled,(state,action)=>{
            state.status="fulfilled"
            state.video=action.payload
        })
        .addCase(fetchVideo.rejected,state=>{
            state.status="rejected"
        })
    }
})
export const{clearVideo}=videoDataSlice.actions;
export default videoDataSlice.reducer;