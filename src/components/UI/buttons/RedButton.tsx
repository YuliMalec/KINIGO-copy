import { useAppDispatch } from '../../../store/hooks/hooks';
import { AutorizationisOpen } from '../../../store/redusers/modalOpenSlice';
import style from './redButton.module.scss'
import {memo} from 'react'
const RedButton = memo(()=> {
    const dispatch = useAppDispatch()
    return ( <button className={style.button} onClick={()=>dispatch(AutorizationisOpen(true))}>
       АВТОРИЗАЦІЯ
   </button> );
})

export default RedButton;