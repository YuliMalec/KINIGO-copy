
import React,{useState} from 'react'
import { usePaginationProps,usePaginationReturn } from '../../models/models'


type UsePagination = (usePaginationProps:usePaginationProps)=>(usePaginationReturn)
const usePagination:UsePagination = ({contentPerPage,data:data})=>{
    const [page, setPage] = useState(1); 
    const total_pages = data.total_pages;
   
    const total_films = data?.results.length; 

   const pageCount = Math.ceil(total_pages/ contentPerPage);
    const lastContentIndex =page>=254? total_pages-1 : page+contentPerPage;
    const firstContentIndex = lastContentIndex - contentPerPage; 
    const changePage = (direction: boolean) => {
        setPage((state) => {
          // move forward
          if (direction) {
            // if page is the last page, do nothing
            if (state === pageCount) {
              return state;
            }
            return state + 1;
            // go back
          } else {
            // if page is the first page, do nothing
            if (state === 1) {
              return state;
            }
            return state - 1;
          }
        });
      };
      const setPageSAFE = (num: number) => {
        // if number is greater than number of pages, set to last page
        if (num > pageCount) {
          setPage(pageCount);
          // if number is less than 1, set page to first page
        } else if (num < 1) {
          setPage(1);
        } else {
          setPage(num);
        }
      };
    return{
        totalPage:pageCount,
        nextPage: () => changePage(true),
        prevPage: () => changePage(false),
        setPage: setPageSAFE,
        page,
       lastContentIndex,
       firstContentIndex, 
       total_pages
       
    } 
      
    
}
export default usePagination;
