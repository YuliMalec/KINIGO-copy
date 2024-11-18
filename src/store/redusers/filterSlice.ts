import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
const initialState = {
    filter:{
        genre:'',
        type:'',
        year:'',
        country:''
    }
}

const filterSlice = createSlice({
name:'filter',
initialState,
reducers:{
    setGenre:(state,action:PayloadAction<string>)=>{
        state.filter.genre=action.payload;
    },
    setType:(state,action)=>{
        state.filter.type=action.payload;
    },
    setYear:(state,action)=>{
        state.filter.year =action.payload;
    },
    setCountry:(state,action)=>{
        state.filter.country=action.payload;
    }
}
})
export const {setCountry,setGenre,setType,setYear} = filterSlice.actions;

export const filterReduser = filterSlice.reducer;