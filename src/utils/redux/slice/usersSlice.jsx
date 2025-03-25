import { createSlice } from "@reduxjs/toolkit";

export const usersSlice=createSlice({
    name:'users',
    initialState:{
        users:[],
        user:{}
    },
    reducers:{
        addUser:(state,action)=>{
            const{userName,password,email}=action.payload;
            state.users.push({userName,password,email});
        },
        setCurrentUser:(state,action)=>{
            state.user=action.payload
        }
    }
})
export const{addUser,setCurrentUser}=usersSlice.actions;
export default usersSlice.reducer;