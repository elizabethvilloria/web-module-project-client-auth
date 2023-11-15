import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const Login = () => 
  (<h2>Login</h2>);

const FriendList = () => 
  (<h2>Friends</h2>);

const AddFriend = () => 
  (<h2>Add Friend</h2>);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Navigate to="/" replace />} />
        <Route path="/friends" element={<FriendList />} />
        <Route path="/friends/add" element={<AddFriend />} />
      </Routes>
    </div>
  );
}

export default App;
