import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const AddFriend = () => {
    const [form, setForm] = useState({
        username: '',
        age: '',
        email: ''
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        axios.post('http://localhost:9000/api/friends', form, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(resp => {
            navigate('/friends'); 
        })
        .catch(err => {
            console.error(err); 
        });
    };

    return (
        <div>
            <h2>Add Friend</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input onChange={handleChange} name="username" id="username" />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input onChange={handleChange} name="age" id="age" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input onChange={handleChange} name="email" id="email" />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default AddFriend;