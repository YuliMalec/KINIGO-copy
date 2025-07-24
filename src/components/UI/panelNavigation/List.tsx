
import { FC,memo} from 'react';
import style from './panelNavigation.module.scss'


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