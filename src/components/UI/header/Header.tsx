import {FC,memo,PropsWithChildren, useState,ChangeEvent,useRef, useEffect,useCallback} from 'react'
import '../../../scss/style.css';
import RedButton from '../buttons/RedButton';
import style from './header.module.scss';
import './../../../scss/_burger.scss';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import LinkLogo from './LinkLogo';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';
import { setSearch } from '../../../store/redusers/searchSlice';
import { turnDark, turnLight } from '../../../store/redusers/turnsLight';
import TurnLigthButtons from '../buttons/TurnLigthButtons';
import { RegistrationIsOpen,AutorizationisOpen } from '../../../store/redusers/modalOpenSlice';



const Header:FC<PropsWithChildren> = () =>{
    const navigate = useNavigate()
    const [value,setValue] = useState('')
    const dispatch = useAppDispatch()
    
    const {search} = useAppSelector(state=>state.serchReduser)
    const {swittchSun,swittchMoon} = useAppSelector(state=>state.turnReduser)
    const [menuOpen,setMenuOpen] = useState(false)
    const handlInput = (e:ChangeEvent<HTMLInputElement>) =>{
       setValue(e.target.value) 
      dispatch(setSearch(value))  
  
    }
 
    const gotoSearch =useCallback(()=>{  
            if(search.trim().length>0){
          navigate('/search')
        }
          setValue('')
          setMenuOpen(false)
        },[search])
      

      useEffect(()=>{
        const enterEvent = (e:KeyboardEvent)=>{
          e.preventDefault();
          if(e.keyCode ===13  ){
            dispatch(setSearch(value))
            gotoSearch()
            
          }
        }
       
        document.addEventListener('keyup',enterEvent); 
        
        return ()=>{
          document.removeEventListener('keyup',enterEvent)
        }
      },[search,gotoSearch])
     

    const handleSwitchSun = ()=>{
      
      dispatch(turnLight(!swittchSun))
      dispatch(turnDark(swittchSun))
     
    }
    const handleSwitchMoon = ()=>{
     
      dispatch(turnDark(!swittchMoon))
      dispatch(turnLight(swittchMoon))
     
    }
  const openRegisterWindow = () =>{
    dispatch(RegistrationIsOpen(true))
    setMenuOpen(false)
  }
  const openAutorizeWindow = () =>{
    dispatch(AutorizationisOpen(true))
    setMenuOpen(false)
  }
    return ( 
       <div className={style.header}>
      <LinkLogo />
        <div className={style.search}>
            <input className={style.input} placeholder='Пошук по сайту...'value={value}  onChange={(e)=>handlInput(e)}/>
            <button className='icon-magnifying-glass-solid' onClick={()=>gotoSearch}></button>
        </div>
     <TurnLigthButtons handleSwitchSun={handleSwitchSun}
     handleSwitchMoon={handleSwitchMoon}
     />
     <div className={menuOpen ? style.iconMenu + ' ' +style.menuOpen : style.iconMenu}
     onClick={()=>setMenuOpen(!menuOpen)}
    
     >
         
          <span></span>
          
        </div>
        <div className={style.buttons}>
        <button className={style.register}
        onClick={openRegisterWindow}
        >РЕЄСТРАЦІЯ</button>
        <RedButton/>
        </div>
        <div className={menuOpen ? style['header-menu']+' ' +style.open : style['header-menu']}>
          <div className={style['search-menu']}>
            <input className={style.input} placeholder='Пошук по сайту...'value={value}  onChange={(e)=>handlInput(e)}/>
            <button className='icon-magnifying-glass-solid' onClick={()=>gotoSearch}></button></div>
        <button 
        onClick={openRegisterWindow}
        >РЕЄСТРАЦІЯ</button>
        <button  onClick={openAutorizeWindow}>
       АВТОРИЗАЦІЯ
   </button>
        </div>
       </div>
     );
}

export default memo(Header);