import React,{useMemo} from 'react';

import style from './panelNavigation.module.scss'

import List from './List';
import Ganres from './Ganres';
import { setCountry,setType,setYear } from '../../../store/redusers/filterSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';
import { useNavigate } from 'react-router-dom';



function PanelNavigation() {
const typesOfFilms=useMemo(()=>  ['Фільми','Серіали','Мультики','Мультсеріали','Аніме','Аніме серіали','ТВ Шоу'],[]);
const years =useMemo(()=> ['2019','2020','2021','2022','2023','2024'],[])
const cantries =useMemo(()=>['США','Корея', 'Індія'],[])
 
 const {swittchSun} = useAppSelector(state=>state.turnReduser)  

const dispatch = useAppDispatch()
const navigate = useNavigate()
const typeOfFilm = (item:string)=>{
dispatch(setType(item)) 
if(item==='Фільми'){

  navigate('/')
  }else if(item==='Серіали'){
navigate('/serials')
  }else if(item ==='ТВ Шоу'){
navigate('/tv')
  }else{
    navigate('/filterbytype')
  }

}
const yearsOfFilm = (item:string)=>{
  dispatch(setYear(item))
 

    navigate('/filterbyyear')
  

}
const countriesOfFilm = (item:string)=>{
  dispatch(setCountry(item))
  navigate('filterbycountry')
}


    return ( <article className={style.panel }style={{backgroundColor:swittchSun?'#b8a7a7':'#585858',color:swittchSun?'#434240':'#e0dfdc'}}>
       <div className={style.block}>
      <h3 className='title'>ПАНЕЛЬ НАВІГАЦІЇ<span>NEW</span></h3>
      </div> 
      <div className={style.intresting}>
        <div className={style.categories}>
          <h3 className={style.name}>Категорії фільмів</h3>
        <Ganres/>
        </div>
        <div className={style.type}>
        <h3 className={style.name}>Тип</h3>
        <List arr={typesOfFilms} filters={typeOfFilm}/>
        </div>
        <div className={style.year}>
        <h3 className={style.name}>Рік</h3>
        <List arr = {years} filters={yearsOfFilm}/>
        </div>
        <div className={style.cantry}>
        <h3 className={style.name}>Країна</h3>
       <List arr={cantries} filters={countriesOfFilm}/>
        </div>
      </div>
      <div className={style.block}>
        <h3 className={style.title}>Цікаво сьогодні</h3></div>
      <div className={style.block}>
      <h3 className={style.title}>Комментують</h3>
      </div>
    </article> );
}

export default PanelNavigation;