import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
    const navigate = useNavigate(); 

    useEffect(() => {
        const token = localStorage.getItem("token");

        axios.post('http://localhost:9000/api/logout', {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(resp => {
            localStorage.removeItem("token");
            navigate('/login'); 
        })
        .catch(err => {
            console.log(err);
        });
    }, [navigate]); 
    return (<div></div>);
}

export default Logout;