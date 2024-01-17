import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/forgetpassword.css';

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleTokenSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Dummy logic to update the user's password
    setStep(4);
  };

  return (
    <div className="forgot-password-container">
      {step === 1 && (
        <div className="forgot-password-step">
          <h2>Step 1: Get Token</h2>
          <button onClick={() => setStep(2)}>Get Token</button>
        </div>
      )}

      {step === 2 && (
        <div className="forgot-password-step">
          <h2>Step 2: Enter Token</h2>
          <form onSubmit={handleTokenSubmit}>
            <label>
              Token:
              <input
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
              />
            </label>
            <br />
            <button type="submit">Submit Token</button>
          </form>
        </div>
      )}

      {step === 3 && (
        <div className="forgot-password-step">
          <h2>Step 3: Reset Password</h2>
          <form onSubmit={handlePasswordSubmit}>
            <label>
              New Password:
              <input
                style={{ color: 'black' }}
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </label>
            <br />
            <label>
              Confirm Password:
              <input
                style={{ color: 'black' }}
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>
            <br />
            <button type="submit">Reset Password</button>
          </form>
        </div>
      )}

      {step === 4 && (
        <div className="forgot-password-step">
          <h2>Password Reset Successful!</h2>
          {navigate('/')}
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
