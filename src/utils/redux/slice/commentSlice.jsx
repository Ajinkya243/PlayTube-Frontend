import { createSlice } from "@reduxjs/toolkit";

export const commentSlice=createSlice({
    name:'comments',
    initialState:{
        comments:[]
    },
    reducers:{
        addComment:(state,action)=>{
            const{videoId,userName,text}=action.payload;
            state.comments.unshift({videoId,userName,text})
        },
        deleteComment:(state,action)=>{
            state.comments=action.payload
        }
    }
})
export const{addComment,deleteComment}=commentSlice.actions;
export default commentSlice.reducer;