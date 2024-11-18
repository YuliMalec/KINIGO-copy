
import {  paginateReduser } from './redusers/paginationSlice';
import { toggleReduser } from './redusers/toggleTitle';
import {configureStore} from '@reduxjs/toolkit'
import { filterReduser } from './redusers/filterSlice';
import { turnReduser } from './redusers/turnsLight';
import { modalReduser } from './redusers/modalOpenSlice';
import {kinogoApi} from './../services/kinogoService'
import {serchReduser} from './redusers/searchSlice'

import {setupListeners} from '@reduxjs/toolkit/query';



export const store =configureStore({
    reducer:{
  [kinogoApi.reducerPath]:kinogoApi.reducer,
  paginateReduser,
toggleReduser,
serchReduser,
filterReduser,
turnReduser,
modalReduser


    },
    middleware:(defaultMiddleware)=>defaultMiddleware().concat(kinogoApi.middleware)
    

})
setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch