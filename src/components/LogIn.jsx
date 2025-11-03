import { useState } from "react";

const LogIn = () =>{
const[ isLogin , setIsLogin] =useState(false)
    return(
        <div className="login">
            <button onClick={()=>setIsLogin(!isLogin)}>login</button>
            <h1>

            {isLogin ?  " welcome ": "please login"}
            </h1>
        </div>
    )
}
export default LogIn;