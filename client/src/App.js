import React from 'react';
import AppNavbar from './components/AppNavbar';
import LoginModal from './components/LoginModal';
import Users from './components/Users';
import Reports from './components/Reports';
import Notifications from './components/Notifications';

import './App.css';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <LoginModal />
      <Users />
      <Reports />
      <Notifications />
    </div>
  );
}

export default App;
