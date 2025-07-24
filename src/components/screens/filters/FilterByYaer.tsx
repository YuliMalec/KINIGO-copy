
import { useAppSelector } from '../../../store/hooks/hooks'
import { useFilterByYearQuery } from '../../../services/kinogoService'
import FilmItem from '../../UI/FilmItem/FilmItem'
export default function FilterByYear() {
 
const {filter}= useAppSelector(state=>state.filterReduser)
    const {data} = useFilterByYearQuery(filter.year)
    if(data?.results.length===0) return 'Нічого не знайдено!'
  return (<>
  {data?.results.map(el=>{
    return <FilmItem item={el} title={'filterbyyear'}/>
  })}
  </>
   
  )
}
