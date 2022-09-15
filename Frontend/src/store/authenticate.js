import { createSlice } from "@reduxjs/toolkit";
const token=localStorage.getItem('token');
let init=false;
if(token){
    init=true;
}
const authenticateSlice=createSlice({
    name:'auth',
    initialState:{isAuthenticated:init,token:token},
    reducers:{
        authenticate(state,action){
            state.isAuthenticated=!state.isAuthenticated;
            const token1=action.payload;
            state.token=token1.token;
            localStorage.setItem('token',token1.token);
        },
        unauthenticate(state){
            state.isAuthenticated=!state.isAuthenticated;
            localStorage.removeItem('token');
        }
    }
})
export default authenticateSlice;
export const authActions=authenticateSlice.actions;