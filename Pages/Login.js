// pages/login.js
import React, { useState, useEffect } from 'react';
import styles from '../styles/Login.module.css'; // Optional: CSS module for styling

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Code inside useEffect runs only on the client side
    console.log('Component mounted on client side');
    // You can perform client-specific operations here
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here, e.g., call an API to authenticate
  };

  return (
    <div className={styles.loginContainer}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
