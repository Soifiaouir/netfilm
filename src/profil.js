import React from 'react';
import './profil.css';

function profile () {
    const user ={
        avatar:'./asset/21.png',
        name: 'John',
        email: "john.doe@example.com",
        age: 25,  
    };

return ( 
<div className="profile-container">
    <div className="profile-header">
      <img src={user.avatar} alt={user.name} className="profile-avatar" />
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
    </div>
    )};
    export default profile;
