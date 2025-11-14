import { useParams } from "react-router-dom";

const Profile  = () =>{
   const {username,_id}= useParams()
    return(
        <>
        
        <h1>hello welcome {username} your id number is {_id}</h1>
        </>
    )
}
export default Profile;
