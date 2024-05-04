import React, { useState } from 'react';
import axios from 'axios'; // You need to have Axios installed

const DeleteUser = () => {
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handleDeleteUser = () => {
    // Make the DELETE request to delete the user based on the user ID
    axios
      .delete(`http://localhost:8080/api/v1/user/delete/${userId}`)
      .then((response) => {
        setMessage(`User with ID ${userId} has been deleted.`);
      })
      .catch((error) => {
        setMessage(`Error deleting user with ID ${userId}: ${error.message}`);
      });
  };
  
  return (
    <div className="delete-user-container">
      <h2>Delete User</h2>
      <div className="input-container">
        <label>User ID:</label>
        <input
          type="text"
          name="userId"
          value={userId}
          onChange={handleUserIdChange}
        />
      </div>
      <button className="delete-button" onClick={handleDeleteUser}>
        Delete User
      </button>
      <p className="message">{message}</p>

      <style jsx>{`
        .delete-user-container {
          max-width: 400px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 4px;
          background-color: #f9f9f9;
        }

        .input-container {
          margin-bottom: 10px;
        }

        label {
          display: block;
          margin-bottom: 5px;
        }

        input[type="text"] {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .delete-button {
          background-color: #ff0000;
          color: #fff;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .delete-button:hover {
          background-color: #ff3333;
        }

        .message {
          font-weight: bold;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};

export default DeleteUser;
