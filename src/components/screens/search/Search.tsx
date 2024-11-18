
import FilmItem from '../../UI/FilmItem/FilmItem'
import { useGetSerchQuery } from '../../../services/kinogoService'
import { useAppSelector } from '../../../store/hooks/hooks'
import { useLocation, useParams } from 'react-router-dom'
 
export default function Search() {

    const {search} = useAppSelector(state=>state.serchReduser)
   /* const {page} = useAppSelector(state=>state.paginateReduser)*/
   const location = useLocation()
   const page = [1,2,3,4,5,6,7,8,9]
    const {data} = useGetSerchQuery({search,page})
   
 
 console.log(data)
 const title = location.pathname;
 const tv = data?.results.filter(item=>{
 return  item.media_type ==='tv';

 })
  const movie = data?.results.filter(item=>{
    return item.media_type ==='movie'
  })
 if(data?.results.length===0 ){
return 'Фільмів не знайдено!'
 }
  return (<>
   { movie?.map((item,key)=>{
      return <FilmItem item={item} key={key} title={''}/>
    }) }
    {tv?.map(item=>{
return <FilmItem item={item} key={item.id} title={title}/>
    })}
   
  </>)
}
