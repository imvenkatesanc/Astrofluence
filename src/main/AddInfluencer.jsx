import React, { useState } from 'react';
import './AddUser.css';
import axios from 'axios';
function AddInfluencer() {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    IndustryFocus: '',
    Location: '',
    Age: '',
    Gender: '',
    SocialMedia: '',
    Followers: '',
    EngagementRate: '',
    PreferredPlatforms: '',
    ContentFocus: '',
    PreviousInteractions: '',
    Strategies: '',
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
            IndustryFocus: '',
            Location: '',
            Age: '',
            Gender: '',
            SocialMedia: '',
            Followers: '',
            EngagementRate: '',
            PreferredPlatforms: '',
            ContentFocus: '',
            PreviousInteractions: '',
            Strategies: '',
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
      <h2>ADD &nbsp;Influencer &nbsp;Information</h2>
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
          <label>Industry Focus:</label>
          <input type="text" name="IndustryFocus" value={formData.IndustryFocus} onChange={handleChange} />
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
          <label>Social Media:</label>
          <input type="text" name="SocialMedia" value={formData.SocialMedia} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Followers:</label>
          <input type="number" name="Followers" value={formData.Followers} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Engagement Rate:</label>
          <input type="number" name="EngagementRate" value={formData.EngagementRate} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Preferred Platforms:</label>
          <input type="text" name="PreferredPlatforms" value={formData.PreferredPlatforms} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Content Focus:</label>
          <input type="text" name="ContentFocus" value={formData.ContentFocus} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Previous Interactions:</label>
          <input type="text" name="PreviousInteractions" value={formData.PreviousInteractions} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Strategies:</label>
          <input type="text" name="Strategies" value={formData.Strategies} onChange={handleChange} />
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

export default AddInfluencer;
