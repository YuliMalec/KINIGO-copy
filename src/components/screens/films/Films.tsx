
import  { useEffect,FC} from 'react'

import { useTypeSelector } from '../../../store/hooks/useTypeSelector'
import { useGetNowplayingQuery } from '../../../services/kinogoService'
import  FilmItem  from './../../UI/FilmItem/FilmItem'
import { Pagination } from '../../UI/pagination/Pagination'

/*import { useAppSelector } from '../../../store/hooks/hooks'*/



export const Films: FC= () =>{
/*  const {active} = useAppSelector(state=>state.toggleReduser)*/
    const {page}= useTypeSelector(state=>state.paginateReduser)
    const {data,isLoading} = useGetNowplayingQuery([page])
    const films =data?.results
   
   useEffect(()=>{
  
  document.querySelector('.wrapper')?.scrollTo(0,0)
   },[page])

   
     
  if (isLoading) return <div>Завантаження...</div>
  if (!data) return <div>Немає фільмів!</div>
  
 console.log(films)
  return (<>{films?.map((item,index)=>{
return <FilmItem key={index} item={item} title={''}/>
   })}
    <Pagination data={data} page={page}/>
  
</>)
}
