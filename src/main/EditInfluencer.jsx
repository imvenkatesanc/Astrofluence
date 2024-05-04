import React, { useState, useEffect } from 'react';
import './EditUser.css';
import axios from 'axios';
import './Navstyle.css'; // Import your stylesheet
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faImages, faPaintBrush, faCar, faBars,faHome,faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link,useNavigate } from 'react-router-dom';
import './Land.css';
import Icon from '../assets/flame.svg';
import AddInfluencer from './AddInfluencer';
import Loading from './Loading';

function EditInfluencer() {
  const [influencerData, setInfluencerData] = useState([]);
  const [editingInfluencer, setEditingInfluencer] = useState(null); // Store the intern being edited
  const [deletingInfluencer, setDeletingInfluencer] = useState(null); // Store the intern being deleted
  const [loading, setLoading] = useState(true);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  
    const history = useNavigate();

    const goBack=()=>{
      history('/influencer-feed');
    }

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

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/user');
      setInfluencerData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch the intern data from your API
    // axios
    //   .get('http://localhost:8080/api/v1/user')
    //   .then((response) => {
    //     setInternData(response.data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching data:', error);
    //     setLoading(false);
    //   });
      fetchData();
  }, []);

  const handleEditClick = (influencer) => {
    history('/influencer-feed/add')
    setEditingInfluencer(influencer);
  };

  const handleDeleteClick = (influencer) => {
    setDeletingIntern(influencer); // Set the intern to be deleted
  };

  const handleUpdate = (updatedInfluencer) => {
    // Update the intern data in the UI
    const updatedData = influencerData.map((influencer) =>
      influencer.influencerId === updatedInfluencer.influencerId ? updatedInfluencer : influencer
    );
    setInfluencerData(updatedData);
    setEditingInfluencer(null); // Clear the editing state

    // Update the intern data on the server
    axios
      .put(`http://localhost:8080/api/v1/user/update/${updatedInfluencer.influencerId}`, updatedInfluencer)
      .then((response) => {
        console.log('Intern updated successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error updating intern:', error);
      });
  };

  const handleDelete = () => {
    if (deletingInfluencer) {
      // Delete the intern data in the UI
      const updatedData = influencerData.filter(
        (influencer) => influencer.influencerId !== deletingInfluencer.influencerId
      );
      setInfluencerData(updatedData);
      setDeletingInfluencer(null); // Clear the deleting state

      // Delete the intern on the server
      axios
        .delete(`http://localhost:8080/api/v1/user/delete/${deletingInfluencer.influencerId}`)
        .then((response) => {
          console.log('Intern deleted successfully:', response.data);
        })
        .catch((error) => {
          console.error('Error deleting intern:', error);
        });
    }
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
              <Link to="/founder-profile" className="navbar-link">Founders</Link>
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
          <div>
              <AddInfluencer/>
          </div>
          <div className="intern-edit-container">
      <div>
          <button onClick={goBack} className="back-button">
          <FontAwesomeIcon icon={faArrowLeft} /> Go Back
          </button>
      </div>
      <h2 className='int-list-head'>Influencer List</h2>
    {loading ? (
        <Loading />
    ) : influencerData.length > 0 ? (
        <table>
        <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Industry Focus</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {influencerData.map((influencer) => (
            <tr key={influencer.InfluencerID}>
                <td>{influencer.Name}</td>
                <td>{influencer.Email}</td>
                <td>{influencer.IndustryFocus}</td>
                <td>
                <button onClick={() => handleEditClick(influencer)}>
                    <i className="fas fa-edit"></i> Edit
                </button>
                <button onClick={() => handleDeleteClick(influencer)}>
                    <i className="fas fa-trash"></i> Delete
                </button>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    ) : (
        <p>No data available.</p>
    )}

    {editingInfluencer && (
        <div className="modal">
        <div className="modal-content">
            <span className="close" onClick={() => setEditingInfluencer(null)}>
            &times;
            </span>
            <h3>Edit Influencer</h3>
            <button onClick={() => setEditingInfluencer(null)}>Cancel</button>
            <button onClick={() => handleUpdate(editingInfluencer)}>Save</button>
        </div>
        </div>
    )}

    {deletingInfluencer && (
        <div className="confirm-dialog">
        <div className="confirm-dialog-content">
            <p>Are you sure you want to delete {deletingInfluencer.Name}?</p>
            <button onClick={handleDelete}>Yes</button>
            <button onClick={() => setDeletingInfluencer(null)}>No</button>
        </div>
        </div>
    )}
    </div>

    </>
  );
};

export default EditInfluencer;