import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import Loading from '../main/Loading'; // Import the Loading component

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:4000/users/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      });
      const data = await response.json();
      if (response.ok) {
        navigate('/home');
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error('Error authenticating user:', error);
      setErrorMessage('An error occurred while authenticating. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <>
      {loading && <Loading />} {/* Render the Loading component if loading is true */}
      <div style={{ position: 'absolute', top: '10rem', left:'50%', transform: 'translateX(-50%)', textAlign: 'center',  padding: '50px 100px', border: '1px solid #ccc', borderRadius: '15px' }}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} style={{ padding: '8px', borderRadius: '5px', width: '100%', marginTop: '15px' }} />
          </div>
          <div>
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} style={{ padding: '8px', borderRadius: '5px', width: '100%', marginTop: '15px' }} />
          </div>
          <button type="submit" disabled={loading} style={{marginTop:'30px', backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
            {loading ? 'Loading...' : 'Login'}
          </button>
          <p style={{ marginTop: '50px' }}>Don't have an account? <Link to="/signup" style={{ color: '#007bff', textDecoration: 'none' }}>Signup</Link></p>
        </form>
        {errorMessage && <h3 style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</h3>}
      </div>
      <button style={{ position: 'absolute', top: '1rem', right: '1rem', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer', border: 'none', backgroundColor: 'red', color: '#fff' }} onClick={goBack}>Back</button>
    </>
  );
}

export default Login;
