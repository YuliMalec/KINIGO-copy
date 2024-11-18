
export  const changeColor =(event:React.ButtonHTMLAttributes<HTMLButtonElement >,)=>{
      
}


export  const createPages= (total_pages:number) =>{

    let result = [];
  
for(let i = 1; i<=total_pages; i++){
   result.push(i)

}

    return result;
 }
 

 export const getKeyOfCounrty = (country:string)=>{
    let key = '';
    if(country==='США') key='US';
    if(country==='Корея') key='KP';
    if(country==='Індія') key='IN';
    return key;
   }

