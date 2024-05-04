  import React, { useState, useEffect } from 'react';
  import './EditUser.css';
  import axios from 'axios';
  import './Navstyle.css'; // Import your stylesheet
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faUser, faImages, faPaintBrush, faCar, faBars,faHome,faArrowLeft } from '@fortawesome/free-solid-svg-icons';
  import { Link, useNavigate } from 'react-router-dom';
  import './Land.css';
  import Icon from '../assets/flame.svg';
  import AddFounder from './AddFounder';
  import Loading from './Loading';

  function EditFounder() {
    const [founderData, setFounderData] = useState([]);
    const [editingFounder, setEditingFounder] = useState(null); // Store the founder being edited
    const [deletingFounder, setDeletingFounder] = useState(null); // Store the founder being deleted
    const [loading, setLoading] = useState(true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const history = useNavigate();

    const goBack = () => {
      history('/founder-feed');
    };
      // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/user');
        setFounderData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

    const handleEditClick = (founder) => {
      history('/founder-feed/add');
      setEditingFounder(founder);
    };

    const handleDeleteClick = (founder) => {
      setDeletingFounder(founder); // Set the founder to be deleted
    };

    const handleUpdate = (updatedFounder) => {
      // Update the founder data in the UI
      const updatedData = founderData.map((founder) =>
        founder.FounderID === updatedFounder.FounderID ? updatedFounder : founder
      );
      setFounderData(updatedData);
      setEditingFounder(null); // Clear the editing state

      // Update the founder data on the server
      axios
        .put(`http://localhost:8080/api/v1/user/update/${updatedFounder.FounderID}`, updatedFounder)
        .then((response) => {
          console.log('Founder updated successfully:', response.data);
        })
        .catch((error) => {
          console.error('Error updating founder:', error);
        });
    };

    const handleDelete = () => {
      if (deletingFounder) {
        // Delete the founder data in the UI
        const updatedData = founderData.filter((founder) => founder.FounderID !== deletingFounder.FounderID);
        setFounderData(updatedData);
        setDeletingFounder(null); // Clear the deleting state

        // Delete the founder on the server
        axios
          .delete(`http://localhost:8080/api/v1/user/delete/${deletingFounder.FounderID}`)
          .then((response) => {
            console.log('Founder deleted successfully:', response.data);
          })
          .catch((error) => {
            console.error('Error deleting founder:', error);
          });
      }
    };
    return (
      <>
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
        <div>
          <AddFounder />
        </div>
        <div className="intern-edit-container">
          <div>
            <button onClick={goBack} className="back-button">
              <FontAwesomeIcon icon={faArrowLeft} /> Go Back
            </button>
          </div>
          <h2 className="int-list-head">Startup Founder List</h2>
          {loading ? (
            <Loading />
          ) : founderData.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Industry Vertical</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {founderData.map((founder) => (
                  <tr key={founder.FounderID}>
                    <td>{founder.Name}</td>
                    <td>{founder.Email}</td>
                    <td>{founder.IndustryVertical}</td>
                    <td>
                      <button onClick={() => handleEditClick(founder)}>
                        <i className="fas fa-edit"></i> Edit
                      </button>
                      <button onClick={() => handleDeleteClick(founder)}>
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

          {editingFounder && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={() => setEditingFounder(null)}>
                  &times;
                </span>
                <h3>Edit Founder</h3>
                <button onClick={() => setEditingFounder(null)}>Cancel</button>
                <button onClick={() => handleUpdate(editingFounder)}>Save</button>
              </div>
            </div>
          )}

          {deletingFounder && (
            <div className="confirm-dialog">
              <div className="confirm-dialog-content">
                <p>Are you sure you want to delete {deletingFounder.Name}?</p>
                <button onClick={handleDelete}>Yes</button>
                <button onClick={() => setDeletingFounder(null)}>No</button>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }

export default EditFounder;