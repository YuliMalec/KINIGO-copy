import React, { useState } from 'react'
import style from './modal.module.scss'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks'
import { RegistrationIsOpen } from '../../../store/redusers/modalOpenSlice'

import { inputs } from '../../../models/models';
import { useForm, SubmitHandler } from "react-hook-form"
export default function Register() {
  const {registerIsOpen} = useAppSelector(state=>state.modalReduser)
  const {autorizeIsOpen} = useAppSelector(state=>state.modalReduser)
  const dispatch = useAppDispatch()
  const [name,setName] = useState<string>()
  const [sername,setSername] = useState<string>()
  const [email,setEmail] = useState<string>()
  const [password,setPassword] = useState<string>()
  const [passwordRep,setPasswordRep]= useState<string>()
const {register,handleSubmit,watch,formState:{errors}} = useForm<inputs>()
const onSubmit: SubmitHandler<inputs> = (data) => {
  console.log(data)
  dispatch(RegistrationIsOpen(false))
}
  
  const handleWindow =(event:React.MouseEvent<HTMLDivElement>)=>{
      event.stopPropagation();
      
  }
  if(registerIsOpen) {
  return <section className={style.body}
  onClick={()=>dispatch(RegistrationIsOpen(false))
  
  }
  
  >
      <div className={style.window}
      onClick={(event)=>handleWindow(event)}
      >
         <div className={style.title}>
          <h2>РЕЄСТРАЦІЯ</h2>
         </div>
         <div className={style.form}>
          <form onSubmit={handleSubmit(onSubmit)}>
           <input defaultValue={'Ведіть ім`я...'} {...register('name', { required: true })} value={name} onChange={(e)=>setName(e.target.value)}/>
           <input defaultValue={'Ведіть Прізвище...'} {...register('sername', { required: true })}  value={sername} onChange={(e)=>setSername(e.target.value)}/>
           <input defaultValue={'Електронна пошта...'} {...register('email', { required: true })} value={email} onChange={(e)=>setEmail(e.target.value)}/>
           <input defaultValue={'Вигадайте пароль..'} {...register('password', { required: true })} value={password} onChange={(e)=>setPassword(e.target.value)}/>
           <input defaultValue={'Повторіть пароль..'} {...register('passwordRep', { required: true })} value={passwordRep} onChange={(e)=>setPasswordRep(e.target.value)}/>
           <button type='submit' onSubmit={handleSubmit(onSubmit)}>Ок</button>
          </form>
         </div>
      </div>
     
    </section>
  }

  if(autorizeIsOpen){
    return <section className={style.body}
  onClick={()=>dispatch(RegistrationIsOpen(false))}
  >
      <div className={style.window}
      onClick={(event)=>handleWindow(event)}
      >
         <div className={style.title}>
          <h2>АВТОРИЗАЦІЯ</h2>
         </div>
         <div className={style.form}>
          <form onSubmit={handleSubmit(onSubmit)}>
           <input defaultValue={'Введіть пароль..'} {...register('password', { required: true })} value={password} onChange={(e)=>setPassword(e.target.value)}/>
           <input defaultValue={'Електронна пошта...'} {...register('email', { required: true })} value={email} onChange={(e)=>setEmail(e.target.value)}/>
           
           
           <button type='submit' onSubmit={handleSubmit(onSubmit)}>Ок</button>
          </form>
         </div>
      </div>
     
    </section>
  }

  
}
