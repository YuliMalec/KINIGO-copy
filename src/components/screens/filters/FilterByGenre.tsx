import React,{useState} from 'react'
import { useFilterByGenreQuery, useGetNowplayingQuery } from '../../../services/kinogoService'
import { useAppSelector } from '../../../store/hooks/hooks'
import FilmItem from '../../UI/FilmItem/FilmItem' 

export default function FilterByGenre() {
  const {filter} = useAppSelector(state=>state.filterReduser)
    const {data} = useFilterByGenreQuery(filter.genre)
if(data?.results.length===0) return 'Нічого не знайдено!'

console.log(data)
  return (<>
    {data?.results.map((film)=>{
return <FilmItem key={film.id} item={film} title={''}/>
    })}

  </>)
}
