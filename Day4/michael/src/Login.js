import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    
    if (username === 'suren' && password === 'cse') {
      setLoggedIn(true);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#f0f0f0',
        margin: 0,
        padding: 0,
      }}
    >
      
      <nav
        style={{
          display: 'flex',
          flexDirection: 'row', 
          backgroundColor: '#333',
          padding: '10px',
          color: 'white',
          justifyContent: 'space-around', 
          textDecoration: 'none',
          margin: 0
        }}
      >
        <a href="/"  style={{textDecoration:'none', color:'aliceblue'}}>
          <h2>My App</h2>
        </a>
        <a href="https://skct.edu.in"style={{textDecoration:'none', color:'aliceblue'}} >
          <h2>Home</h2>
        </a>
        <a href="/dashboard" style={{textDecoration:'none', color:'aliceblue'}}>
          <h2>DashBoard</h2>
        </a>
        <a href="/scoreboard" style={{textDecoration:'none', color:'aliceblue'}}>
          <h2>ScoreBoard</h2>
        </a>
      </nav>


      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
        }}
      >
        <div
          style={{
            maxWidth: '400px',
            width: '100%',
            textAlign: 'center',
            padding: '20px',
            boxSizing: 'border-box',
            border: '1px solid #ccc',
            borderRadius: '5px',
            backgroundColor: 'aliceblue',
          }}
        >
          {loggedIn ? (
            <div>
              <h2>Welcome, {username}!</h2>
              <p>You are now logged in.</p>
            </div>
          ) : (
            <div>
              <h2>Login Page</h2>
              <form
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <label style={{ marginBottom: '10px' }}>
                  Username:
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </label>
                <label style={{ marginBottom: '10px' }}>
                  Password:
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
                <button
                  type="button"
                  onClick={handleLogin}
                  style={{
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    padding: '10px',
                    cursor: 'pointer',
                  }}
                >
                  Login
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
