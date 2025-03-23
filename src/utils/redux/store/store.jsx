import { configureStore } from "@reduxjs/toolkit"
import { videosSlice } from "../slice/videoSlice";
export const store=configureStore({
    reducer:{
        videos:videosSlice.reducer,
    }
});
export default store;