
import style from './footer.module.scss'
import LinkLogo from '../header/LinkLogo'

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.logotype}>
      <LinkLogo/>
      </div>
      <div className={style.content}>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
      </div>
    </div>
  )
}
