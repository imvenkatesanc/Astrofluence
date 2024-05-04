import React, { useState } from 'react';
import './AddUser.css';
import axios from 'axios';

function AddFounder() {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    IndustryVertical: '',
    StartupStage: '',
    Location: '',
    Age: '',
    Gender: '',
    EducationLevel: '',
    Interests: '',
    SocialMedia: '',
    FollowerDemographics: '',
    NetworkingEvents: '',
    Challenges: '',
    ProfileImage: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post('http://localhost:8080/api/v1/user/add', formData)
      .then((response) => {
        if (response.status === 201) {
          setFormData({
            Name: '',
            Email: '',
            IndustryVertical: '',
            StartupStage: '',
            Location: '',
            Age: '',
            Gender: '',
            EducationLevel: '',
            Interests: '',
            SocialMedia: '',
            FollowerDemographics: '',
            NetworkingEvents: '',
            Challenges: '',
            ProfileImage: '',
          });
          console.log('Data added successfully:', response.data);
        } else {
          console.error('HTTP error in the POST request:', response.status);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error in the POST request:', error);
        setLoading(false);
      });
  };

  return (
    <div className="intern-add-form">
      <h2>Add Founder Information</h2>
      <div className='add-icon'> <i className="fas fa-plus"></i></div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="Name" value={formData.Name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="Email" value={formData.Email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Industry Vertical:</label>
          <input type="text" name="IndustryVertical" value={formData.IndustryVertical} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Startup Stage:</label>
          <input type="text" name="StartupStage" value={formData.StartupStage} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input type="text" name="Location" value={formData.Location} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input type="number" name="Age" value={formData.Age} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <input type="text" name="Gender" value={formData.Gender} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Education Level:</label>
          <input type="text" name="EducationLevel" value={formData.EducationLevel} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Interests:</label>
          <input type="text" name="Interests" value={formData.Interests} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Social Media:</label>
          <input type="text" name="SocialMedia" value={formData.SocialMedia} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Follower Demographics:</label>
          <input type="text" name="FollowerDemographics" value={formData.FollowerDemographics} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Networking Events:</label>
          <input type="text" name="NetworkingEvents" value={formData.NetworkingEvents} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Challenges:</label>
          <input type="text" name="Challenges" value={formData.Challenges} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Profile Image URL:</label>
          <input type="text" name="ProfileImage" value={formData.ProfileImage} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default AddFounder;