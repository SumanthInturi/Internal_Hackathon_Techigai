import React, { useState } from 'react';
import './Signup.css'; 

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Total-main-container">
      <div className="main-container">
        <div className="auth-container">
          <h2>Sign up</h2>
          <form onSubmit={handleSignup}>
            <input
              type="name"
              placeholder="Fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="confirmpassword"
              placeholder="Confirm Password"
              value={confirmpassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
              required
            />
            <button type="submit">
              Sign up
              </button>
          </form>
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
          <p>
            <a href="/home">Skip</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
