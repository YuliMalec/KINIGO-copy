import React,{FC} from 'react'
import style from './watchButton.module.scss'
import { Link } from 'react-router-dom'

interface watchButtonProp {
  title:string,
  id:number
}

const WatchButton:FC<watchButtonProp> =({title,id}) =>{
  return (<>
    <Link to={`${title}/${id}`}className={style.button}>Дивитися онлайн</Link>
  </>)
}

export default WatchButton;
