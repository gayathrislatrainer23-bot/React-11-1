import { useEffect, useState } from "react";

const SideEffect =({userName})=> {
const [name,SetName] = useState("")
const [email,SetEmail] = useState("")

useEffect(()=>{
    // side effect ode
    console.log("I  am here  every render")
})

useEffect(()=>{
    // side effect ode
    console.log("I  am here initally render")
},[])
useEffect(()=>{
    // side effect ode
    console.log("I  am run only when state change in dependancy array")
    if(name === "admin"){
        alert(" pls check notification")
    }
},[name])
    return(
        <>
        {name}
        {email}
        <button onClick={()=>SetName("admin")}>Change Name</button>
        <button onClick={()=>SetName(userName[0])}>Change to props Name</button>
        <button onClick={()=>SetEmail(`${name}@gmail.com`)}>Change email</button>
        </>
    )
}

 export default SideEffect;