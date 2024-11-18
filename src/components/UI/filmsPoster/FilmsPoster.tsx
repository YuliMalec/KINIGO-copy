
import { useAppSelector } from '../../../store/hooks/hooks';
import style from './filmsPoster.module.scss'
import AppRouts from '../../../routs/AppRouts';


function FilmsPoster() {
   
    const active = useAppSelector(state=>state.toggleReduser)
    const {swittchSun} = useAppSelector(state=>state.turnReduser)
  
    return ( <article className={style.poster} 
    style={{backgroundColor:swittchSun?'#6f6363':'#2b2b2b',color:swittchSun?'#434240':'#e0dfdc'}}> 
    <div className={style.header}>
      <h2>{active.active}</h2>  
    </div>
<AppRouts/>
    </article> );
}

export default FilmsPoster;