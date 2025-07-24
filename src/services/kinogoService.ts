

import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { IMovies,IQuery, IImage ,ISerialsDetails, IMovieDetail, IVideos} from '../models/models';
import { IGenres } from '../models/models';

import {BASE_URL} from './../constants/constants'
import {API_KEY} from './../constants/constants'
import { ACCESS_TOKEN } from './../constants/constants';

export const kinogoApi = createApi({
    reducerPath:'kinogoApi',
    baseQuery: fetchBaseQuery({baseUrl:BASE_URL,prepareHeaders:(headers)=>{
        headers.set('authorization', `Bearer ${ACCESS_TOKEN}`)
        return headers;
    }}),
    endpoints:(build) =>({
        getNewFilms:build.query<IMovies | undefined,number>({
           query:(page)=>`discover/movie?include_adult=true&include_video=true&language=en-US&page=${page}&sort_by=popularity.desc&api_key=${API_KEY}`,
           
        }),
        getGenre:build.query<IGenres ,string>({
            query:()=>`genre/movie/list?language=en&api_key=${API_KEY}`
        }),
        getNowplaying:build.query<IMovies,number[]>({
            query:(page)=>`movie/now_playing?language=en-US&page=${page}&api_key=${API_KEY}`
        }),
        getSerials:build.query<IMovies,number>({
            query:(page)=>`tv/airing_today?language=en-US&page=${page}&api_key=${API_KEY}`
        }),
        getTVShows:build.query<IMovies,number>({
            query:(page)=>`/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc&api_key=${API_KEY}`
        }),
        getUpcomingMovies:build.query<IMovies,number|IQuery>({
            query:(page)=>`movie/upcoming?language=en-US&page=${page}&api_key=${API_KEY}`
        }),
        getFilmImages:build.query<IImage[],number>({
            query:(id)=>`movie/${id}/images&api_key=${API_KEY}`
        }),
        getMovieDetails:build.query<IMovieDetail,string>({
            query:(id:string)=>`movie/${id}&api_key=${API_KEY}?append_to_response=videos%2Ccredits&language=en-US`
        }),
        getSerialsDetails:build.query<ISerialsDetails,string>({
            query:(id)=>`tv/${id}&api_key=${API_KEY}?append_to_response=videos%2Ccredits&language=en-US`
        }),
        getSerialsVideo:build.query<IVideos,string>({
        query:(id)=>`tv/${id}/videos`
        }),
        getSerch:build.query<IMovies,IQuery>({
            query:({search,page})=>`/search/multi?query=${search}&include_adult=false&language=en-US&page=${page}&api_key=${API_KEY}`
        }),
        filterByYear:build.query<IMovies,string>({
            query:(year)=>`discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=${year}&sort_by=popularity.desc`
        }),
        filterByGenre:build.query<IMovies,string>({
            query:(genre)=>`discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre}`
        }),
        filterByCountry:build.query<IMovies,string>({
            query:(country)=>`discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_origin_country=${country}`
        }),
        getCartoons:build.query<IMovies,string>({
            query:()=>`discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16`
        })

    })

})

export const {
    useGetNewFilmsQuery,
    useGetGenreQuery,
    useGetNowplayingQuery,
    useGetSerialsQuery,
    useGetTVShowsQuery,
    useGetUpcomingMoviesQuery,
    useGetFilmImagesQuery,
    useGetMovieDetailsQuery,
    useGetSerialsDetailsQuery,
    useGetSerialsVideoQuery,
    useGetSerchQuery,
    useFilterByYearQuery,
    useFilterByGenreQuery,
    useFilterByCountryQuery,
    useGetCartoonsQuery
    
} = kinogoApi
export const {
    getNewFilms,
    getGenre,
    getNowplaying,
    getSerials,
    getTVShows,
    getUpcomingMovies,
    getFilmImages,
    getMovieDetails,
    getSerialsDetails,
    getSerialsVideo,
    getSerch,
    filterByYear,
    filterByGenre,
    filterByCountry,
    getCartoons
} = kinogoApi.endpoints;