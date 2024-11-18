import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import {titleMenu} from './../../../constants/constants'
import {useDispatch,useSelector} from 'react-redux'
import style from './menu.module.scss';
import { setActive } from '../../../store/redusers/toggleTitle';
import type { RootState } from '../../../store/store';
import { setPage } from '../../../store/redusers/paginationSlice';
import { useAppSelector } from '../../../store/hooks/hooks';


function Menu() {
  const active = useSelector((state:RootState)=>state.toggleReduser)
  const {swittchSun} = useAppSelector(state=>state.turnReduser)
  const dispatch = useDispatch()

 useEffect(()=>{
dispatch(setPage(1))
 },[active])
    return ( <ul className={style.menu}
    
    >
     <li style={{backgroundColor:swittchSun?'#6f6363':'#2b2b2b'}}
        className={titleMenu[0]===active.active ?style.link_active: style.link}
        onClick={()=>dispatch(setActive(titleMenu[0]))}
      >
          <Link to={'/'}>{titleMenu[0]}</Link>
        </li>
        <li style={{backgroundColor:swittchSun?'#6f6363':'#2b2b2b'}}
        className={titleMenu[1]===active.active ?style.link_active: style.link}
        onClick={()=>dispatch(setActive(titleMenu[1]))}
      >
          <Link to={'/newmovie'}>{titleMenu[1]}</Link>
        </li>
        <li style={{backgroundColor:swittchSun?'#6f6363':'#2b2b2b'}}
        className={titleMenu[2]===active.active ?style.link_active: style.link}
        onClick={()=>dispatch(setActive(titleMenu[2]))}
      >
          <Link to={'/serials'}>{titleMenu[2]}</Link>
        </li>
        <li style={{backgroundColor:swittchSun?'#6f6363':'#2b2b2b'}}
        className={titleMenu[3]===active.active ?style.link_active: style.link}
        onClick={()=>dispatch(setActive(titleMenu[3]))}
      >
          <Link to={'/soon'}>{titleMenu[3]}</Link>
        </li>
        <li style={{backgroundColor:swittchSun?'#6f6363':'#2b2b2b'}}
        className={titleMenu[4]===active.active ?style.link_active: style.link}
        onClick={()=>dispatch(setActive(titleMenu[4]))}
      >
          <Link to={'/tv'}>{titleMenu[4]}</Link>
        </li>
   
    </ul> );
}

export default Menu;