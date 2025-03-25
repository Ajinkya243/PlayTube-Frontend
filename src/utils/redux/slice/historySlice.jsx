import { createSlice } from "@reduxjs/toolkit";

export const historySlice=createSlice({
    name:'history',
    initialState:{
        history:[]
    },
    reducers:{
        addHistory:(state,action)=>{
            const{userName,video}=action.payload;
            const uniqueVideo=state.history.find(el=>el.video.videoId===video.videoId && el.userName===userName);
            if(!uniqueVideo){
                state.history.push({userName,video});
            }    
        },
        removeFromHistory:(state,action)=>{
            state.history=action.payload;
        },
        clearHistory:(state,action)=>{
            state.history=[];
        }
    }
})
export const {addHistory,removeFromHistory,clearHistory}=historySlice.actions;
export default historySlice.reducer;