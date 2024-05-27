// App.js
import React from 'react';
import Login from './Login';
import Dashboard from './Dashbord';
import "bootstrap/dist/css/bootstrap.min.css";

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return code ? <Dashboard code={code} /> : <Login />;
}

export default App;
