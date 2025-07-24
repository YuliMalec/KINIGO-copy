import {useEffect} from 'react'
import { useTypeSelector } from '../../../store/hooks/useTypeSelector'
import { useGetSerialsQuery} from '../../../services/kinogoService'
import { FilmItem } from '../../UI/FilmItem/FilmItem'
import { Pagination } from '../../UI/pagination/Pagination'
import { useLocation,  } from 'react-router-dom'

export default function Serials() {
    const {page}= useTypeSelector(state=>state.paginateReduser)
    const {data,isLoading} = useGetSerialsQuery(page)
    const films = data?.results

   
const location = useLocation()
 

    useEffect(()=>{
  
      document.querySelector('.wrapper')?.scrollTo(0,0)
       },[page])
       console.log(films)
       if (isLoading) return <div>Завантаження...</div>
    if (!data) return <div>Немає фільмів!</div> 
  return (<>

{films?.map((film,index)=>{
return <FilmItem key={index} item={film} title={location.pathname}/>
   })}
      <Pagination data={data} page={page}/>
  </>)
}