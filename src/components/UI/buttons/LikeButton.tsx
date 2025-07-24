
import style from './likeButton.module.scss'
import { AiOutlineLike } from "react-icons/ai";
import classNames from 'classnames';

export default function LikeButton() {
  return (
    <div className={style.like}>
    <div className={classNames(style['icon_like'], style.icon)}><AiOutlineLike size={16} fill={'#fff'}/></div>
    <div className={style.quantity}>0</div>
  </div>
  )
}
