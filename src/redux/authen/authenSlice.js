import { createSlice } from "@reduxjs/toolkit";

const authenSlice = createSlice({
    name : "authen",
    initialState:{
        login:{
            currentUser:null,
            isFetching:false,
            error:false
        }
    },
    reducers:{
        loginStart: state=>{
            state.login.isFetching = true;
        },
        loginSuccess: (state,action)=>{
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.error = false;
        },
        loginFail: state=>{
            state.login.isFetching = false;
            state.login.currentUser = null;
            state.login.error = true;
        }
    }
})

export const {
    loginStart,
    loginSuccess,
    loginFail
} = authenSlice.actions;

export default authenSlice.reducer