import React from 'react';

const ProfilePage = () => {
  const user = {
    name: 'John Doe',
    bio: 'Frontend Developer',
    location: 'New York',
    profileImage: 'https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg',
  };

  return (
    <div className="profile">
      <img src={user.profileImage} alt="Profile" style={{width:'20%',}} className="profile-image" />
      <h1 className="profile-name">{user.name}</h1>
      <p className="profile-bio">{user.bio}</p>
      <p className="profile-location">Location: {user.location}</p>
    </div>
  );
};

export default ProfilePage;
