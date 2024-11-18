import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './scss/_style.scss'
import MeinContent from './components/UI/mainContent/MeinContent.tsx';
import SingleFilmPage from './components/screens/singleFilmPage/SingleFilmPage.tsx';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
 
<BrowserRouter><App/></BrowserRouter>
 
  
   
 
)
