import React, { useState } from 'react';
import './css/login.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Loging() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:8000/api/token/', {
      username,
      password
      });

    localStorage.setItem('access', response.data.access);
    localStorage.setItem('refresh', response.data.refresh);

      navigate("/index"); 
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="form-section">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <p>Username</p>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"
                className="input-field"
                required
              />
            </label>
            <label>
              <p>Password</p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="input-field"
                required
              />
            </label>
            <div>
              <button className="login-btn" type="submit">Login</button>
            </div>
          </form>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <div className="divider"></div>
          <div style={{ textAlign: "center" }}>OR</div>

          <p>If you don't have an account..</p>
          <Link to="/signup" className="register-btn">Register</Link>
        </div>

        <div className="image-section">
          <img
            src="https://images.unsplash.com/photo-1552010099-5dc86fcfaa38"
            alt="Login visual"
          />
        </div>
      </div>
    </div>
  );
}

export default Loging;
