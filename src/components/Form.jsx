import { useState } from "react";

 const Form = ()=>{
const [name ,setName] = useState('')
const handleSubmit = (e) =>{
e.preventDefault()
// prevent reload page
alert(`Name:${name}`)
}
     return(
 <>
 <form onSubmit={handleSubmit}>
    <label>Name</label>
    <input type="text" value={name}  placeholder="Enter your Name" onChange={(e)=>{setName(e.target.value)}} />
    <button  type="submit">Submit</button>
    <button  type="reset">Reset</button>
 </form>
 </>
     )
 }
 export default Form;