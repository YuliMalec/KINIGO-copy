import React from 'react'
import { Routes,Route, Router } from "react-router-dom";
import FilmItem from '../components/UI/FilmItem/FilmItem';
import SingleFilmPage from '../components/screens/singleFilmPage/SingleFilmPage';
import SingleSerialsPage from '../components/screens/singleSerialsPage/SingleSerialsPage'
import FilmsPoster from '../components/UI/filmsPoster/FilmsPoster';
import { Films } from '../components/screens/films/Films';
import NewFilms from '../components/screens/newFilms/NewFilms';
import Serials from '../components/screens/serials/Serials';
import UpComing from '../components/screens/soon/UpComing';
import TvShows from '../components/screens/tvShows/TVShows';
import Search from '../components/screens/search/Search';

import FilterByGenre from '../components/screens/filters/FilterByGenre';
import FilterByYear from '../components/screens/filters/FilterByYaer';
import FilterByType from '../components/screens/filters/FilterByType';
import FilterByCountry from '../components/screens/filters/FilterByCountry';

export default function AppRouts() {
  return (
    <Routes>
      
       <Route path={'/:id'||'/search/multi/:id'} element={<SingleFilmPage/>}/>
        <Route path={':title/:id'} element={<SingleSerialsPage/>}/>
        
        <Route path='/' element={<Films/>}/>
        <Route path='newmovie' element={<NewFilms/>}/>
        <Route path='serials' element={<Serials/>}/>
        <Route path='soon' element={<UpComing/>}/>
        <Route path='tv' element={<TvShows/>}/>
      <Route path='/filterbycountry' element={<FilterByCountry/>}/>
      <Route path='/filterbygenre' element={<FilterByGenre/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/filterbyyear' element={<FilterByYear/>}/>
        <Route path='/filterbytype' element={<FilterByType/>}/>
    </Routes>
  )
}
