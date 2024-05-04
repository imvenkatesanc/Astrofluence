import React, { useState } from 'react';
import './Navstyle.css'; // Import your stylesheet
import './Land.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faImages, faPaintBrush, faCar, faBars,faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Icon from '../assets/flame.svg';
import InfluencerCardList from './InfluencerCardList';



function Influencerfeed() {
  // State to toggle the sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to set the active navigation link (you can implement your logic here)
  const setActiveNav = () => {
    // Implement your logic to set the active navigation link here
  };

  // Scroll to target element
  const scrollToTarget = (target) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle navigation click event
  const handleNavClick = (event, target) => {
    event.preventDefault();
    scrollToTarget(target);
    setActiveNav(); // Call setActiveNav to set the active link (implement your logic)
  };

  return (
    <>
      <div>
        <div className="navbar">
          <div className="navbar-left">
            <img src={Icon} alt="App Icon" className="navbar-logo"/>
            <h2>Astrofluence</h2>
          </div>
          <div className="nav-center">WELCOME &nbsp; Astrofluence</div>
          <div className="navbar-right">
            <Link to="/myprofile" className="navbar-link">My Profile</Link>
            <Link to="/influencer-feed" className="navbar-link">Influencer</Link>
            <Link to="/founder-feed" className="navbar-link">Founder</Link>
            <Link to="/" className="navbar-link">Logout</Link>
          </div>
        </div>
        <div className='off-nav'>
          <div className="dashboard-container">
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
              <div className="sidebar-header">
                <div id="sidebar-toggle" onClick={toggleSidebar}>
                  <FontAwesomeIcon icon={faBars} />
                </div>
              </div>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link to="/home" className="nav-link">
                    <FontAwesomeIcon icon={faHome} /> Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/founder-feed" className="nav-link">
                    <FontAwesomeIcon icon={faUser} /> Founders
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/favorites" className="nav-link">
                    <FontAwesomeIcon icon={faImages} /> Favorites
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/performance" className="nav-link">
                    <FontAwesomeIcon icon={faPaintBrush} /> Performance
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/feedback" className="nav-link">
                    <FontAwesomeIcon icon={faCar} /> Feedback
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <InfluencerCardList/>
    </>
  );
}

export default Influencerfeed;