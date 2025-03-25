import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
export const fetchVideos=createAsyncThunk("videos/fetchVideos",async()=>{
    const response=await axios.get("https://play-tube-backend-sigma.vercel.app/videos");
    return response.data
})
export const videosSlice=createSlice({
    name:'videos',
    initialState:{
        videos:[],
        status:'idle',
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchVideos.pending,state=>{
            state.status="pending"
        })
        .addCase(fetchVideos.fulfilled,(state,action)=>{
            state.status='success';
            state.videos=action.payload;  
        })
        .addCase(fetchVideos.rejected,(state,action)=>{
            state.status="rejected";
            state.error=action.payload;
        })
    }
})


