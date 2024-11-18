import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    autorizeIsOpen:false,
    registerIsOpen:false
}

const modalOpenSlice = createSlice({
    name:'modalIsOpen',
    initialState,
    reducers:{
        AutorizationisOpen:(state,action)=>{
            state.registerIsOpen = false;
            state.autorizeIsOpen=action.payload;
        },
        RegistrationIsOpen:(state,action)=>{
            state.autorizeIsOpen = false;
            state.registerIsOpen = action.payload;
        }
    }
})

export const modalReduser= modalOpenSlice.reducer;
export const {AutorizationisOpen,RegistrationIsOpen} = modalOpenSlice.actions;