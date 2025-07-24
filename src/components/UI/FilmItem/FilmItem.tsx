 import {FC,useState} from 'react'

 import style from './filmItem.module.scss';
import {Link} from 'react-router-dom';
import WatchButton from '../buttons/WatchButton';

import useGetGenre from '../../../store/hooks/useGetGenre';
import Rating from '../buttons/Rating';
import LikeButton from '../buttons/LikeButton';
import DisLikeButton from '../buttons/Dislike';
import { URL_FOR_IMAGE } from '../../../constants/constants';
 import { FaEye } from "react-icons/fa";
 import { BiSolidCommentDots } from "react-icons/bi";
import {  IMovie} from '../../../models/models';
import Favoruite from '../buttons/Favoruite';
import { useAppSelector } from '../../../store/hooks/hooks';



interface FilmItemProps{
  item:IMovie,
title:string |undefined
 
  
}
 export const FilmItem:FC<FilmItemProps>=({item,title=''}) =>{

 const [genres,setGenres] =useState(useGetGenre(item.genre_ids))
const {swittchSun} =useAppSelector(state=>state.turnReduser)
console.log(setGenres)
   return (<article  className={style.card}
     style={{color:swittchSun?'#fff':'#e0dfdc'}}>
      
<div className={style.content}>
 <Link to={`${title}/${item.id}`}className={style.image}>
  <img src={`${URL_FOR_IMAGE}${item.poster_path}`}/>
</Link>
<div className={style.info}> 
 <div className={style.titles}>
    <h3 className={style.title}>{item.original_title || item.original_name}</h3>
    <p className={style.subtitle}>1 вер 2024 12:45</p>
  </div>
  <ul>
  <li><span>Дата випуску:</span> {item.release_date || item.first_air_date}</li>
  <li><span>Оригінальна назва: </span>{item.original_title || item.original_name}</li>
  <li><span>Мова релізу: </span>{item.original_language}</li>
  <li><span>Жанр: <br/></span>
{genres.map((el,i)=>{
  return <div  key={i}>{el} / </div>
})}
  </li>
  </ul>
  <p className={style.discription}>...<br/>{item.overview}</p>
</div>
</div>
<div className={style.footer}>
<WatchButton title={title} id={item.id}/>
<Rating item={0}/>
<LikeButton/>
<DisLikeButton/>
<div className={style.comments}>
  <span className={style.watched}>
<div className={style.icon}>
  <FaEye fill={'#a8a8a8'}/>
  </div>
<p className={style.p}>217</p>
  </span>
  <span className={style.comment}>
  <div className={style.icon}>
    <BiSolidCommentDots fill={'#a8a8a8'}/>
    </div>
<p className={style.p}>0</p>
  </span></div>
</div>
<Favoruite/>
     </article>
   )
 }
 export default FilmItem;