import React,{memo} from 'react'
import style from './header.module.scss'
import {Link} from 'react-router-dom';

 function LinkLogo() {
  
  return (
    <Link to={'/'} className={style.logo}>
    <div className={style['logo-title']}>
    <span className={style['logo-title-blue']}>KINO</span>
    <span className={style['logo-title-yell']}>GO</span>
    </div>
    <div className={style['logo-link']}>.ua.movie</div>
</Link>
  )
}
export default memo(LinkLogo);
