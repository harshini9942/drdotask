import React, { useState } from 'react';
import './styles.css';

const Login = () => {
  const [name, setName] = useState('');

  const handleLogin = () => {
    if (name.trim().toLowerCase() === 'harshini') {
      window.location.href = '/profile';
    } else {
      alert('Invalid Name! Access Denied.');
    }
  };

  return (
    <div className="container">
      <h1>RCI - Research Centre Imarat</h1>
      <p>Empowering students to explore, compute, and innovate using modern technologies.</p>
      
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
