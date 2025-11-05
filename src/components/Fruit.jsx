
import { useState } from "react"

function Fruit(){
const  fruits = ["Apple","Orange"]
let list =[]
for(let fruit of fruits ){
    list.push(
        <li>{fruit}</li>
    )
}
    return(
        <>
{list}
        </>

    )
    
    
}
export default Fruit