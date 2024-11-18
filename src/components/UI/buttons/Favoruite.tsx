import React from 'react'
import style from './favoruite.module.scss'
import { TiPlus } from "react-icons/ti";

export default function Favoruite() {
  return (
    <div className={style.plus}>
  <div className={style.icon}>
  <TiPlus size={25} fill={'#e0dfdc'}/></div>
  </div>
  )
}
