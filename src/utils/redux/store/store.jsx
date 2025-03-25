import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import videoDataReducer from "../slice/videoDataSlice";
import commentReducer from '../slice/commentSlice';
import historyReducer from '../slice/historySlice';
import likesReducer from '../slice/likesSlice';
import usersReducer from '../slice/usersSlice';
import watchLaterReducer from '../slice/watchLaterSlice';

// const videosPersistConfig={
//     key:"videos",
//     storage,
//     whitelist:['videos']
// }
const videoDataPersistConfig={
    key:"videos",
    storage,
    whitelist:['videoData']
}
const commentPersistConfig={
    key:'comments',
    storage,
    whitelist:['comments']
}
const historyPersistConfig={
    key:'history',
    storage,
    whitelist:['history']
}
const likesPersistConfig={
    key:'likes',
    storage,
    whitelist:['likes']
}
const usersPersistConfig={
    key:'users',
    storage,
    whitelist:['users','user']
}
const watchlaterPersistConfig={
    key:'watchLater',
    storage,
    whitelist:['watchLater']
}
const persistedVideoReducer=persistReducer(videoDataPersistConfig,videoDataReducer);
const persistedCommentReducer=persistReducer(commentPersistConfig,commentReducer);
const persistedHistoryReducer=persistReducer(historyPersistConfig,historyReducer);
const persistedLikesReducer=persistReducer(likesPersistConfig,likesReducer);
const persistedUserReducer=persistReducer(usersPersistConfig,usersReducer);
const persistedWatchlaterReducer=persistReducer(watchlaterPersistConfig,watchLaterReducer)

export const store=configureStore({
    reducer:{
       videos: persistedVideoReducer,
       comments:persistedCommentReducer,
       history:persistedHistoryReducer,
       likes:persistedLikesReducer,
       users:persistedUserReducer,
       watchLater:persistedWatchlaterReducer

    }
});
export const persistor=persistStore(store)
export default store;