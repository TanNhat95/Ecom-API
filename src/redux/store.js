import { configureStore } from "@reduxjs/toolkit";
import authenReducer from './authen/authenSlice.js'
export default configureStore({
    reducer:{
        authen : authenReducer,
    }
});