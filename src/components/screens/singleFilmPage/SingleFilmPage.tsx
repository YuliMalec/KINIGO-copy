import{FC} from 'react'
import style from './singleFilmPage.module.scss';
import {  useParams } from 'react-router-dom';

import {  useGetMovieDetailsQuery} from '../../../services/kinogoService';
import { URL_FOR_IMAGE } from '../../../constants/constants';
import Favoruite from '../../UI/buttons/Favoruite';
import Rating from '../../UI/buttons/Rating';
import { useAppSelector } from '../../../store/hooks/hooks';

export default function SingleFilmPage() {
const {id} = useParams()
const {data} = useGetMovieDetailsQuery(id+'')

const video = data?.videos.results.slice(0,1)[0];
const credits = data?.credits.cast.slice(0,5)
const {swittchSun} =useAppSelector(state=>state.turnReduser)



  return (
    <article className={style.poster}
    style={{backgroundColor:swittchSun?'#6f6363':'#2b2b2b',color:swittchSun?'#434240':'#e0dfdc'}}
    > 
    <div className={style['header-title']}>
      <h2>{data?.title}</h2> 
      <Rating item={data?.popularity}/> 
    </div>
    <div className={style.content}>
<div className={style.image}>
  <img src={`${URL_FOR_IMAGE}${data?.poster_path}`}/>
</div>

<ul className={style.info}>
  <li>Оригінальна назва:<span>{data?.original_title}</span></li>
  <li>Дата виходу:<span>{data?.release_date}</span></li>
  <li>Бюджет:<span>{data?.budget}$</span></li>
  <li>Країна:<span>{data?.origin_country}</span></li>
  <li>Актори:<span>{credits?.map(el=>el.name+', ')}</span></li>
  <li>Компанія-виробник:<span>{data?.production_countries[0]?.name}</span></li>
  <li>Жанр:<span>{data?.genres.map((el)=>el.name + ' / ')}</span></li>

  <li>Тривалість:<span>{data?.runtime} c</span></li>
  <li>Статус:<span>{data?.status}</span></li>
  <li>Слоган:<span>{data?.tagline}</span></li>
</ul>
 
</div>
    <div className={style.description}
     style={{color:swittchSun?'#fff':'#e0dfdc'}}
    >
      <h3>{data!==undefined ?`Опис до фільму "${data?.original_title}" у гарній якості і без реєстрації`:
      'Завантаження...'
      }</h3>
      <p>{data?.overview}</p>
    </div>
    <div className={style.films}>
      
      <Video item={video?.key}/> 
 </div>
 <Favoruite/>
    </article>
  )
}

interface IVideoProps{
  item:string|undefined
}
export const Video:FC<IVideoProps> =(item) => {
  console.log(item)
  return (
    <div className={style.video}>
  <iframe src={`https://www.youtube.com/embed/${item.item}`} 
  frameBorder='0'
  allowFullScreen

  width='100%'
  title='video'
  height='100%'
  >
   
  </iframe>
    </div>
  )
} 
