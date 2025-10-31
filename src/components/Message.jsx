
import { useState } from "react"
import Attendance from "./Attendance"
function Message(){
const [message,setMessage]=useState("welcome")

    return(

        <>
        <p>Hello this is message</p>
        <p>{message}</p>
        <Attendance/>
        </>

    )
    
    
}
export default Message