
import { titleMenu } from './../../constants/constants';
import {useAppDispatch,useAppSelector} from './hooks';
import { useTypeSelector } from './useTypeSelector';
import { setCurrentList } from '../redusers/toggleTitle';
import { useGetNowplayingQuery } from '../../services/kinogoService';
export const useToggleList = () =>{
    const active = useAppSelector(state=>state.toggleReduser)
    const {page}= useTypeSelector(state=>state.paginateReduser)
    const dispatch = useAppDispatch()
    let films;
    if(active.active ===titleMenu[0]){
      
        const {data} = useGetNowplayingQuery(page)
         films = data?.results
        dispatch(setCurrentList(films))
        console.log(data)
       
      }
 return films
      

}