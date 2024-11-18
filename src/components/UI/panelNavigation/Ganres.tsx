import { FC} from 'react';
import style from './panelNavigation.module.scss'
import { useGetGenreQuery } from '../../../services/kinogoService';
import { IGenres } from '../../../models/models';
import { useAppDispatch } from '../../../store/hooks/hooks';
import { setCountry, setGenre, setType, setYear } from '../../../store/redusers/filterSlice';
import { useNavigate } from 'react-router-dom';


const Ganres:FC<IGenres > = () =>{
  const {data} = useGetGenreQuery('')
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
 const category = data?.genres;
const handleGenre = (item:string)=>{
  dispatch(setGenre(item))
  navigate('/filterbygenre')
  dispatch(setCountry(''))
  dispatch(setYear(''))
  dispatch(setType(''))
}
    return ( <ul className={style.list}>
        {category?.map((el,index)=>{
          return <li key={index} className={style['link-title']}>
            <div onClick={()=>handleGenre(el.id+'')}>{el.name}</div>
          </li>
        })}
        </ul>  );
}

export default Ganres;