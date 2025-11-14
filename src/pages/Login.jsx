import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login =()=>{
 const [email,setLogin] =useState("")
 const navigate = useNavigate()
    const handleSubmit =(e)=>{
        console.log(e)
e.preventDefault();
if(email === "admin@gmail"){

    navigate("/home")
}else{
    alert("you are not an admin")
}

    }
    return(
        <div className="login">
    
          <form onSubmit={handleSubmit} >
          <input type="email" value={email} onChange={(e)=>{setLogin(e.target.value)}} placeholder="Enter your Name"/>
          <input type="password" placeholder="Enter your password"/>
          <button type="submit">Submit</button>
          {/* <button type="reset">reset</button> */}
          </form>
        </div>
    )
}
export default Login;