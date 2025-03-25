import { createSlice } from "@reduxjs/toolkit";

export const likesSlice=createSlice({
    name:'likes',
    initialState:{
        likes:[]
    },
    reducers:{
        addToLikes:(state,action)=>{
            const{userName,video}=action.payload;
            const uniqueVideo=state.likes.find(el=>el.video?.videoId===video.videoId && el.userName===userName);
            if(!uniqueVideo){
                state.likes.push({userName,video});
            }
        },
        removeFromLikes:(state,action)=>{
            state.likes=action.payload
        },
        clearLikes:(state,action)=>{
            state.likes=[];
        }
        
    }
})
export const{addToLikes,removeFromLikes,clearLikes}=likesSlice.actions;
export default likesSlice.reducer;