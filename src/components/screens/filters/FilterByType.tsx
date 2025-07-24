
import { useAppSelector } from '../../../store/hooks/hooks'
import { useGetCartoonsQuery} from '../../../services/kinogoService';
import FilmItem from '../../UI/FilmItem/FilmItem';

export default function FilterByType() {
   
    const {filter} = useAppSelector(state=>state.filterReduser)
  
    if(filter.type==='Мультики'||'Мультсеріали'||'Аніме'||'Аніме серіали'){
      const {data} = useGetCartoonsQuery('')
      
    return data?.results.map(el=>{
    return <FilmItem item={el} title={''}/>
   })
    }
     
  return (
   <>
  ...
   </>
  )
}
