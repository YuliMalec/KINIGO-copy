import {useEffect} from 'react'
import { useTypeSelector } from '../../../store/hooks/useTypeSelector'
import { useGetTVShowsQuery} from '../../../services/kinogoService'
import { FilmItem } from '../../UI/FilmItem/FilmItem'
import { Pagination } from '../../UI/pagination/Pagination'
import { useLocation } from 'react-router-dom'


export default function TvShows() {
    const {page}= useTypeSelector(state=>state.paginateReduser)
    const {data,isLoading} =useGetTVShowsQuery(page)
    const films = data?.results
   
 const location = useLocation()
    useEffect(()=>{
  
      document.querySelector('.wrapper')?.scrollTo(0,0)
       },[page])
     if (isLoading) return <div>Завантаження...</div>
    if (!data) return <div>Немає фільмів!</div>
    console.log(data)
  return (<>
{films?.map((film,index)=>{
return <FilmItem key={index} item={film} title ={location.pathname}/>
   })}
      <Pagination data={data} page={page}/>
  </>)
}