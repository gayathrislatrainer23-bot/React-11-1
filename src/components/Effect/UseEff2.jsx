import { useEffect, useState } from "react";

function UseEff2(){
    const [name,setName]=useState("")
    const [click,setClick]=useState(false)
    useEffect(()=>{
        alert(`name updated ${name}`)
    },[click])
    function handle(){
        

        setClick(click ? false : true)

    }
    return(
        <>
        <h1>enter  your name</h1>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>
        <button onClick={handle}>click</button>
        <h1>age
            
        </h1>
        <input type="number" />
        
        
        </>
    )

}
export default UseEff2;