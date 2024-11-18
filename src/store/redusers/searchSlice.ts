
import {createSlice} from '@reduxjs/toolkit'
const initialState = {
   search:''
}
export const serchSlice = createSlice({
    name:'search',
   initialState,
   reducers:{
    setSearch:(state,action)=>{
        state.search=action.payload;
    }
}
})
export const {setSearch} = serchSlice.actions;
export const serchReduser = serchSlice.reducer;