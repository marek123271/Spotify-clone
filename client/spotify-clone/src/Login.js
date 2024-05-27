import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AUTH_URL = "https://accounts.spotify.com/authorize?response_type=code&client_id=1a662f24544f429c8d75108258f3e06d&scope=streaming%20user-read-private%20user-read-email%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state&redirect_uri=http://localhost:3000";


export default function Login() {
  return (
    <div>Login</div>
  )
}
