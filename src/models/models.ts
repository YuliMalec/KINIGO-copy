
import { number } from 'prop-types';


export interface IURL {
    url:string
}

export interface IMovie {
      id:number,
    genre_ids:number[],
    backdrop_path:string,
    original_title:string,
    media_type:string,

  overview:string,
  poster_path:string,
  release_date:string,
  original_language:string,
  first_air_date:string,
  original_name:string

}

export interface IMovies{
  results:IMovie[],
  total_pages:number,
  page:number
}

export interface IGenre{
      id:number,
      name:string
}
export interface IGenres {
  genres?:IGenre[]
    }

    export interface IImage {
      
      backdrops:[]
    }
    export interface IImages{
      id:number,
      backdrops:[],
       posters:[],
      logos:[]

    } 
    export interface IVideo{
      id:number,
      results:[]
    }

    export interface usePaginationProps{
      contentPerPage:number,
      data:IMovies
      
    }
    export interface usePaginationReturn{
  
      totalPage:number,
      firstContentIndex:number,
      lastContentIndex:number,
      total_pages:number,
      page:number
      nextPage: () => void;
      prevPage: () => void;
      setPage: (page: number) => void;

    }

    export interface IexternalId{
      id:number,
      imdb_id: string,
      wikidata_id: string,
      facebook_id: string,
      instagram_id: string,
      twitter_id: string,
     
    }
    export interface IVideo{
   
      iso_639_1: string,
      iso_3166_1:string,
      name: string,
      key: string,
      site: string,
      size: number,
      type: string,
      official: boolean,
      published_at: string,
    
    }
     export interface IVideos{
      item:IVideo[]
     }

     export interface ICredit{
     
        adult: boolean,
        gender: number,
        id: number,
        known_for_department: string,
        name: string,
        original_name: string,
        popularity: number,
        profile_path: string,
        cast_id: number,
        character: string,
        credit_id: string,
        order: number
     
     }
export interface IMovieDetail{
  backdrop_path:string,
  budget:number,
  genres:IGenre[],
  homepage:string,
  imdb_id:string,
  origin_country:string,
  original_language:string,
  original_title:string,
  overview:string,
  popularity:number,
  poster_path:string,
  production_countries:[{
    iso_3166_1:string,
    name:string}],
  release_date:string,
  revenue:string,
  runtime:string,
  status:string,
  tagline:string,
  title:string,
  videos:{
     results:IVideo[]
     
  },
  credits:{cast:ICredit[],crew:ICredit}
}

export interface IProduction{
name:string[]
}
export interface ISesons{
  id:number,
  name:string,
  season_number:number
}
export interface ISerialsDetails{
  backdrop_path: string,
  poster_path:string,
  episode_run_time: number,
  first_air_date: string,
  genres: IGenre[]
  homepage: string,
  id: number,
  in_production: boolean,
  languages: string,
  name: string,
  number_of_episodes: 269,
  number_of_seasons: 18,
  origin_country:string,
  original_language: string,
  original_name: string,
  overview: string,
  popularity: number,
  status: string,
  tagline:string,
  type: string,
  vote_average:number,
  vote_count: number,
  production_companies:IProduction[],
  
   seasons:ISesons[],

 credits:{cast:ICredit[],crew:ICredit},
 videos:{
  results:IVideo[]
  
},
}
export interface IQuery{
  page:number[]|number,
  search:string,
  
}

export type inputs = {
  name:string,
  sername:string,
  email:string,
  password:string,
  passwordRep:string
}