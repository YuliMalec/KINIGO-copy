import {useParams} from 'react-router-dom'
import style from './../singleFilmPage/singleFilmPage.module.scss'
import {useGetSerialsDetailsQuery} from '../../../services/kinogoService'
import {Video} from './../singleFilmPage/SingleFilmPage'
import { URL_FOR_IMAGE } from '../../../constants/constants'
import Rating from '../../UI/buttons/Rating'
import Favoruite from '../../UI/buttons/Favoruite'
import { useAppSelector } from '../../../store/hooks/hooks'
export default function SingleSerialsPage() {
    const {id} = useParams()
    const {data} = useGetSerialsDetailsQuery(id+'')  
   
    const credits = data?.credits.cast.slice(0,7)
   const video = data?.videos.results[0]
   const {swittchSun} =useAppSelector(state=>state.turnReduser)
   
  
  return (
    <article className={style.poster}
    style={{backgroundColor:swittchSun?'#6f6363':'#2b2b2b',color:swittchSun?'#434240':'#e0dfdc'}}
    > 
    <div className={style['header-title']}>
      <h2>{data?.name}</h2> 
      <Rating item={data?.popularity}/> 
    </div>
    <div className={style.content}>
<div className={style.image}>
  <img src={`${URL_FOR_IMAGE}${data?.poster_path}`}/>
</div>

<ul className={style.info}>
  
  <li>Дата виходу:<span>{data?.first_air_date}</span></li>
  <li>Сайт:<span>{data?.homepage}$</span></li>
  <li>Країна:<span>{data?.origin_country}</span></li>
  <li>Актори:<span>{credits?.map(el=>el.name+', ')}</span></li>
  <li>Компанія-виробник:<span>{data?.production_companies.map(el=>el.name)}</span></li>
  <li>Жанр:<span>{data?.genres.map((el)=>el.name + ' / ')}</span></li>
  <li>Кількість епізодів:<span>{data?.number_of_episodes}</span></li>
  <li>Кількість сезонів:<span>{data?.number_of_seasons}</span></li>
  <li>Тривалість єпізоду:<span>{data?.episode_run_time} c</span></li>
  <li>Сезони:<span>{data?.seasons.slice(0,1).map((el)=>el.name+' ')} </span></li>
  <li>Статус:<span>{data?.status}</span></li>
  <li>Слоган:<span>{data?.tagline}</span></li>
</ul>
 
</div>
    <div className={style.description}
      style={{color:swittchSun?'#fff':'#e0dfdc'}}
    >
      <h3>{data!==undefined ?`Опис до фільму "${data?.original_name}" у гарній якості і без реєстрації`:
      'Завантаження...'
      }</h3>
      <p>{data?.overview}</p>
    </div>
    <div className={style.films}>
   {video?.key !== undefined ? <Video item={video?.key}/> : 'Немає відео...🥺'  } 
    
 </div> 
 <Favoruite/>
    </article>
  )
}
