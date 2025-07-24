
import { useFilterByCountryQuery} from '../../../services/kinogoService'
import {  useAppSelector } from '../../../store/hooks/hooks'
import FilmItem from '../../UI/FilmItem/FilmItem'
import { getKeyOfCounrty } from '../../../helper/helper'

export default function FilterByCountry() {
    
    const {filter} = useAppSelector(state=>state.filterReduser)

  const country = getKeyOfCounrty(filter.country)

    const {data} = useFilterByCountryQuery(country)
 const title = 'filterbycountry'
   
  return (<>
  {data?.results.map((item)=>{
    return <FilmItem item={item} title={title} />
  })}
  </>
   
  )
}
