
import { IGenre} from './../../models/models';
import { useGetGenreQuery } from '../../services/kinogoService';



const useGetGenre = (arr:number[])=>{
  const {data} = useGetGenreQuery('');
  const genre = data?.genres
const res:string[] = []

  arr?.map(el=>{
    genre?.map((cat:IGenre)=>cat.id===el? res.push(cat.name) : null )})

return res; 
}

export default useGetGenre;