import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
export const loginUser=createAsyncThunk('login/user',async({email,password})=>{
    const response=await axios.post("https://play-tube-backend-sigma.vercel.app/user/login",{email,password});
    return response.data;
})

export const signupUser=createAsyncThunk('signup/user',async({email,userName,password})=>{
    const response=await axios.post("https://play-tube-backend-sigma.vercel.app/add-user",{email,userName,password});
    return response;
})

export const usersSlice=createSlice({
    name:'users',
    initialState:{
        users:[],
        user:{},
        status:'idle',
        error:null
    },
    reducers:{
        setCurrentUser:(state,action)=>{
            state.user=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(loginUser.pending,state=>{
            state.status="pending"
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.status="fulfilled" 
        })
        .addCase(loginUser.rejected,state=>{
            state.status="rejected"
        })
        .addCase(signupUser.pending,state=>{
            state.status='pending'
        })
        .addCase(signupUser.fulfilled,state=>{
            state.status="fulfilled"
        })
        .addCase(signupUser.rejected,state=>{
            state.status='rejected'
        })
    }
})
export const{setCurrentUser}=usersSlice.actions;
export default usersSlice.reducer;