import React, {useState, useEffect} from 'react';
import axios from 'axios';


const FriendList = () => {
    const [ friends, setFriends ] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token")
        axios.get('http://localhost:9000/api/friends', {
            headers: {
                Authorization: token
            }
        })
        .then(resp=> {
            console.log(resp)
        })
        .catch(err=> {
            console.log(err.response.data);
        console.log(err.response.status);
            console.log(err)
        })
    }, []);

return (
    <div>
    <h2>FriendsList</h2>
    <ul>
        {
            friends.map(friend => {
                return <li>{friends.name} - {friend.age} - {friend.email} </li>
            })
        }
    </ul>
    </div>
);
}

export default FriendList;