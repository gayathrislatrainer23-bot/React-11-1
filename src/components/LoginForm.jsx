import { useState } from "react";
import axios from 'axios'

const LoginForm = () =>{
// const[ isLogin , setIsLogin] =useState(false)
const [email, setEmail] = useState('')
const handleSubmit =(e)=>{
    e.preventDefault()
   let  userData ={
        email : email,
        password: '123'

    }
axios.post('https://jsonplaceholder.typicode.com/posts',userData)
      .then((response)=>{
    console.log(response)

    // console.log(response.data)
      })

}
    return(
        <div className="login">
            <form action="" onSubmit={handleSubmit}>
                    <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter your Name"/>
                {/* <input type="password" /> */}
                <button type="submit">Login</button>
            </form>

        </div>
    )
}
export default LoginForm;