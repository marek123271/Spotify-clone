import React from 'react';
import './Login.css';  // Create a CSS file for custom styles

const AUTH_URL = "https://accounts.spotify.com/authorize?response_type=code&client_id=1a662f24544f429c8d75108258f3e06d&scope=streaming%20user-read-private%20user-read-email%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state&redirect_uri=http://localhost:3000";

export default function Login() {
  return (
    <div className="container">
        <a href={AUTH_URL} className="login-button">Login with Spotify</a>
    </div>
  );
}
