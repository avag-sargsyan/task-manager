import React from 'react';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Users from './components/Users';
import Reports from './components/Reports';
import Notifications from './components/Notifications';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <NavBar />
                <Login />
                <Users />
                <Reports />
                <Notifications />
            </div>
        </Provider>
  );
}

export default App;
