import { useState } from "react";
function Counter(){
    const[x,setX] = useState(0)
    return(
        <>
        Count: {x} 
        <button onClick={()=>setX(x+1)}>Inc By One</button>
        <button onClick={()=> setX(x-1)}>Dec By One</button>
        </>
    )
}
 export default Counter;
