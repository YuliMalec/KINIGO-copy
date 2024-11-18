import React,{useEffect,useState,FC,useMemo,memo} from 'react'
import style from './pagination.module.scss';
import styles from './../buttons/watchButton.module.scss'
import classNames from 'classnames';

import usePagination from '../../../store/hooks/usePagination';
import { createPages } from '../../../helper/helper';
import { setPage } from '../../../store/redusers/paginationSlice';
import { useAppSelector,useAppDispatch } from '../../../store/hooks/hooks';
import { IMovies,IMovie } from '../../../models/models';


interface IIpaginateProp{
  data:IMovies,
  page:number ,
 
 
}
export const Pagination:FC<IIpaginateProp> =memo( ({data}) =>{  

 const [active,setActive] = useState(1)
     const dispatch = useAppDispatch()
    const {lastContentIndex,
    firstContentIndex,
    nextPage,
    prevPage,
    page,
    totalPage,
    total_pages
    }=usePagination({contentPerPage:9,data:data})
    const pages =useMemo(()=>createPages(total_pages),[total_pages])


function handlePage (page:number){

  setPage(page)
  setActive(page)
  dispatch(setPage(page))
}
function loadMoreFilms(){
  dispatch(setPage(active+1))
  setActive(active+1)
  setPage(active+1)
}
  return (
    <div className={style.pagination}>
        <div className={style.download}>
        <button 
        onClick={loadMoreFilms}
        className={classNames(styles.button,style.button)}
        >Загрузити ще</button>
        </div>
        <div className={style.paginate}>

 { page>=2 && <button onClick={prevPage} className={style.page}>
    &larr;
  </button>}

  {pages
  .slice(firstContentIndex-1, lastContentIndex)
    .map((el: any) => (
      <button className={active===el ? classNames(style.active,style.page) :style.page} 
      onClick={()=>handlePage(el)}
      key={el}>{el}</button>
   ))}
  <button onClick={nextPage} className={style.page}>
    &rarr;
  </button>
</div>
    </div>
  )
})
