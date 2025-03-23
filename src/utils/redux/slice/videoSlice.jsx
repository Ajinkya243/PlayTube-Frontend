import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchVideos=createAsyncThunk("videos/fetchVideos",async()=>{
    const response=await axios.get("https://play-tube-backend-sigma.vercel.app/videos");
    console.log(response);
    return response.data
})
export const videosSlice=createSlice({
    name:'videos',
    initialState:{
        videos:[],
        history:[],
        status:'idle',
        error:null
    },
    reducers:{
        addToHistory:(state,action)=>{
            const video=state.history.find(el=>el._id===action.payload._id);
            if(!video){
                state.history.push(action.payload);
            }
        },
        removeFromHistory:(state,action)=>{
            state.history=action.payload;
        }
    },
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

export const {addToHistory,removeFromHistory}=videosSlice.actions;