
import { useState } from "react"
import Attendance from "./Attendance"
function Message(){
const [message,setMessage]=useState('haii')

    return(

        <>

        {/* <p>Hello this is message</p> */}
        <p>{message}</p>
       {/* {message &&  <Attendance/>} */}
       <Attendance/>
        </>

    )
    
    
}
export default Message