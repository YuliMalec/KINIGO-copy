import React from 'react'
import style from './likeButton.module.scss'
import classNames from 'classnames/dedupe';
import { AiOutlineLike } from "react-icons/ai";

export default function DisLikeButton() {
  return (
    <div className={style.like }>
        <div className={classNames(style['icon_dislike'],style.icon)}><AiOutlineLike/></div>
        <div className={style.quantity}>0</div>
      </div>
  )
}