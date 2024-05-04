import React, { useState, useEffect } from 'react';
import './InfluencerCard.css';
import Loading from './Loading';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faBuilding,
  faGenderless,
  faPhone,
  faAddressCard,
  faFingerprint,
} from '@fortawesome/free-solid-svg-icons';

function InfluencerCardList() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/v1/user')
      .then((response) => {
        if (response.status === 200) {
          setUserData(response.data);
        } else {
          console.error('HTTP error in the GET request:', response.status);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error in the GET request:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="intern-card-list-container">
    {loading ? (
      <Loading />
    ) : userData.length > 0 ? (
      userData
      .filter((user) => user.role === "FOUNDER") // Filter only founder
      .map((user) => (
        <div className="intern-card" key={user.userId}>
           <p className='id'>
            <FontAwesomeIcon icon={faAddressCard} className="icon-userid" />ID: {user.userId}
          </p>
          <img src={user.profileImage} alt={user.name[0] + user.name[1]} className="profile-image" />
          <h2>{user.name}</h2>
          <hr />
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="icon-email" /> {user.email}
          </p>
          <p>
            <FontAwesomeIcon icon={faBuilding} className="icon-department" /> {user.department}
          </p>
          <p>
            <FontAwesomeIcon icon={faGenderless} className="icon-gender" /> Gender: {user.gender}
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} className="icon-phone" /> {user.phone}
          </p>
          <p>
          <FontAwesomeIcon icon={faFingerprint}  className="icon-id" /> {user.role}: {user.influencerId!=null?user.influencerId:user.userId}
          </p>
          <p>
            <FontAwesomeIcon icon={faAddressCard} className="icon-address" /> {user.address}
          </p>
        </div>
      ))
    ) : (
      <p id='out-off'>No data available!..</p>
    )}
  </div>
);
}

export default InfluencerCardList;
