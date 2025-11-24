import { useState } from "react"

const Country = ()=>{
    const [selectedCountry,setSelectedCountry] =useState('')
    console.log(selectedCountry)
const country = {
    India:["Kerala", "Tamilnadu"],
    USA :["A","B"]
}

    return(
        <div className="country">
            <select value={selectedCountry} onChange={(e)=>setSelectedCountry(e.target.value)}>
      {Object.keys(country).map(
      (key) =>(
          <option value={key} key={key} >{key}</option> 
     
      )
      )}
     
        </select>
        <select >

        </select>
        </div>
    )
}

export default  Country;