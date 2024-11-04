import React, { useState } from 'react';
import './Login.css';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = () => {
    if (!username || !password) {
      setError(true);
    } else {
      setError(false);
      alert('로그인 성공!');
    }
  };

  return (
    <div className="login-container">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className={`login-input ${error && !username ? 'input-error' : ''}`}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={`login-input ${error && !password ? 'input-error' : ''}`}
      />
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
    </div>
  );
};
