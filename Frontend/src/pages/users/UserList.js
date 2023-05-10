import axios from 'axios';
import {useEffect, useState} from "react";

const getUsers = async () => {
    try {
        const response = await axios.get('/api/users');
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const isAdmin = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        return false;
    }
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    return decodedToken.role === 'admin';
};

const ListUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            if (isAdmin()) {
                const data = await getUsers();
                setUsers(data);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    );
};

export default ListUsers;
