import React from 'react';
import './Profile.css';
import profileImage from '../../asset/Avatar.png';

const ProfilePage = () => { // Changé de Profile à ProfilePage
  // Données du profil codées en dur
  const profile = {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
  };

  return (
    <div className="profile-container">
      <h1>Profil</h1>
      <div className="profile-content">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="profile-info">
          <h2>{profile.name}</h2>
          <p>Email: {profile.email}</p>
          <p>Âge: {profile.age} ans</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;