import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';

import Login from './Components/login';
import FriendList from './Components/FriendList';
import AddFriend from './Components/AddFriend';
import Logout from './Components/Logout';

function App() {
  return (
    <div className="App">
      <header>
        <h2>Friends Database</h2>
        <Link className="link" to="login">Login</Link>
        <Link className="link" to="friends">Friends List</Link>
        <Link className="link" to="friends/add">Add Friends</Link>
        <Link className="link" to="/logout">Logout</Link>
      </header>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Navigate to="/" replace />} />
        <Route path="/friends" element={<FriendList />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
