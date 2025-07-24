import { IMovies} from './../../models/models';
import { createSlice} from '@reduxjs/toolkit';
import { titleMenu } from '../../constants/constants';


interface ItoggleTitleSlice{
    active:string,
    current_list:IMovies
}

const initialState:ItoggleTitleSlice= {
    active:titleMenu[0],
    current_list:{
        results:[],
        total_pages:1,
        page:1
        
    }
}

export const toggleTitleSlice = createSlice({
    name:'toggleTitle',
    initialState,
    reducers:{
        setActive:(state,action)=>{
            state.active = action.payload
        },
        setCurrentList:(state,action)=>{
           
            state.current_list.results = action.payload
           
        },
        setTotalPages:(state,action)=>{
            state.current_list.total_pages=action.payload
        }
        
    }
})

export const  {setActive} = toggleTitleSlice.actions;
export const  {setCurrentList} = toggleTitleSlice.actions;
export const  {setTotalPages} = toggleTitleSlice.actions;
export const toggleReduser = toggleTitleSlice.reducer;