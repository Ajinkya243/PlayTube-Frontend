import { createSlice } from "@reduxjs/toolkit";

export const watchLaterSlice=createSlice({
    name:'watchLater',
    initialState:{
        watchLater:[]
    },
    reducers:{
        addTowatchLater:(state,action)=>{
            const{userName,video}=action.payload;
            const uniqueVideo=state.watchLater.find(el=>el.video?.videoId===video.videoId && el.userName===userName);
            if(!uniqueVideo){
                state.watchLater.push({userName,video});
            }
        },
        removeFromWatchLater:(state,action)=>{
            state.watchLater=action.payload;
        },
        clearWatchLater:(state,action)=>{
            state.watchLater=[];
        }
    }
    
})
export const{addTowatchLater,removeFromWatchLater,clearWatchLater}=watchLaterSlice.actions;
export default watchLaterSlice.reducer;