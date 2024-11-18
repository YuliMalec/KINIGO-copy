
import style from './../header/header.module.scss';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';
import {FC} from 'react';
import {turnDark,turnLight} from './../../../store/redusers/turnsLight'
interface TurnLigthButtonsProp{
    handleSwitchSun:()=>void,
    handleSwitchMoon:()=>void
}
const TurnLigthButtons:FC<TurnLigthButtonsProp>=({handleSwitchSun,handleSwitchMoon}) =>{
    const {swittchMoon,swittchSun} = useAppSelector(state=>state.turnReduser)
   

  
  return (
    <ul className={style['toggle-ligth']}>
    <li className={swittchSun ?style.li : style['li-up']}>
      <button className='icon-sun-solid' onClick={handleSwitchSun}>
        </button></li>
    <li className={swittchMoon ?style.li : style['li-up']}>
      <button className='icon-moon-solid' onClick={handleSwitchMoon}> 
      </button></li>
</ul>
  )
}

export default TurnLigthButtons;
