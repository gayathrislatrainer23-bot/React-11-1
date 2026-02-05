// 

import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch profile");
        setLoading(false);
      });
  },[]);

  if (loading) return <h3>Loading profile...</h3>;
  if (error) return <h3>{error}</h3>;

  return (
    <div style={styles.card}>
      <h2>Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
      <p><strong>City:</strong> {user.address.city}</p>
    </div>
  );
};

const styles = {
  card: {
    width: "300px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    margin: "20px auto",
    textAlign: "left",
  },
};

export default Profile;


// function(){
// let cb=()=>{
//     let cb=()=>{
//     let cb=()=>{
    
// }
// }
// }
// }