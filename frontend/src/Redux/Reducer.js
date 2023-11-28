

export const Reducer =(state,action)=>{

    if ( action.type=="Details") {
       return action.text;
       
    } else {
      return null;
    }
   
   }

   