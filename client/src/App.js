import React from 'react';
import NavBar from './components/NavBar';
import LoginModal from './components/LoginModal';
import Users from './components/Users';
import Reports from './components/Reports';
import Notifications from './components/Notifications';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <LoginModal />
      <Users />
      <Reports />
      <Notifications />
    </div>
  );
}

export default App;
