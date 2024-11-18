import React,{useEffect} from 'react'
import { useTypeSelector } from '../../../store/hooks/useTypeSelector'
import { useGetUpcomingMoviesQuery} from '../../../services/kinogoService'
import { FilmItem } from '../../UI/FilmItem/FilmItem'
import { Pagination } from '../../UI/pagination/Pagination'

export default function UpComing() {
    const {page}= useTypeSelector(state=>state.paginateReduser)
    const {data,isLoading} = useGetUpcomingMoviesQuery(page)
    const films = data?.results
    
    useEffect(()=>{
  
      document.querySelector('.wrapper')?.scrollTo(0,0)
       },[page])
      

    if (isLoading) return <div>Завантаження...</div>
    if (!data) return <div>Немає фільмів!</div>

  return (<>

{films?.map((film,index)=>{
return <FilmItem key={index} item={film} title={''}/>
   })}
      <Pagination data={data} page={page}/>
  </>)
}