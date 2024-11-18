import {FC,useRef} from 'react'
import style from './rating.module.scss'
import stars from './../../../assets/rating.svg'

interface ratingProp{
  item:number|undefined
}
 const Rating:FC<ratingProp> = ({item=0}) =>{
  
  return (
    <div className={style.rating}>
        <div className={style.query}>0</div>
        <div className={style.stars_p}>
        <div className={style.stars}>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div>
          </div>
        <div className={style.p}>{item} голосів</div>
        </div> 
    </div>
  )
}
export default Rating;