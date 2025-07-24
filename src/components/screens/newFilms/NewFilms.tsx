
import {useEffect} from 'react'
import { useTypeSelector } from '../../../store/hooks/useTypeSelector'
import { useGetNewFilmsQuery} from '../../../services/kinogoService'
import { FilmItem } from '../../UI/FilmItem/FilmItem'

import { Pagination } from '../../UI/pagination/Pagination'
import { useAppSelector } from '../../../store/hooks/hooks';
export default function NewFilms() {
  const {active} = useAppSelector(state=>state.toggleReduser)
    const {page}= useTypeSelector(state=>state.paginateReduser)

    const {data,isLoading} = useGetNewFilmsQuery(page)
    const films = data?.results
  
    
    useEffect(()=>{
  
      document.querySelector('.wrapper')?.scrollTo(0,0)
       },[page])
       console.log(active)
    if (isLoading) return <div>Завантаження...</div>
  if (!data) return <div>Немає фільмів!</div>
  return (<>
{films?.map((film,index)=>{
return <FilmItem key={index} item={film} title={''}/>
   })}
        <Pagination data={data} page={page}/>
 

 </> )
}