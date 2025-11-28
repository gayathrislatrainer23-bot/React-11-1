import { useDispatch, useSelector } from "react-redux"
import { showMessage } from "../redux/messageSlice"

const ReduxMessage = ()=>{

        let message =  useSelector((state)=> state.message.value)
        const dispatch = useDispatch()
return(
    <div className="ReduxMessage">
        {message}
<button onClick={()=>dispatch(showMessage())}>show</button>
    </div>
)
}
export default ReduxMessage