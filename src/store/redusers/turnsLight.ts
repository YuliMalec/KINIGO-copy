import { createSlice } from '@reduxjs/toolkit';


const turnsLightSlice = createSlice({
    name:'turnsLight',
    initialState:{
        swittchSun:false,
        swittchMoon:true
    },
    reducers:{
         turnLight:(state,action)=>{
            state.swittchSun = action.payload;
         },
         turnDark:(state,action)=>{
            state.swittchMoon = action.payload;
         }
    }
})


export const {turnLight} = turnsLightSlice.actions;
export const {turnDark} = turnsLightSlice.actions;
export const turnReduser = turnsLightSlice.reducer;