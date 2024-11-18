
import { FC,memo} from 'react';
import style from './panelNavigation.module.scss'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit/react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';
import { setCountry, setGenre, setType, setYear } from '../../../store/redusers/filterSlice';


interface IList{
    arr?:string[] | undefined ,
    filters:(item:string)=>void;
}
const List:FC<IList > = ({arr,filters}) =>{
 
  const handleList = (el:string)=>{
   filters(el)
  
  }
 

    return ( <ul className={style.list}>
        {arr?.map((el,index)=>{
          return <li key={index} className={style['link-title']}>
            <div onClick={()=>handleList(el)}>{el}</div>
          </li>
        })}
        </ul>  );
}

export default memo(List);