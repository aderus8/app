import React, {useEffect, useState} from "react";
import axios from 'axios';
import UserTable from "../../components/table/userTable/UserTable";


const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const isAdmin = () => {
        const token = localStorage.getItem('token');
        if (!token) {
            return false;
        }
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        return decodedToken.role === 'admin';
    };

    const getUsers = () => {
        if (isAdmin()) {
            axios.get("http://localhost:8080/user/all")
                .then((response) => {
                    setUsers(response.data);
                }).catch((error) => {
                console.log(error);
            })
        }
    }

    return (
        <div style={{marginTop : '100px', display:"flex", alignItems: "center", flexDirection: "column"}}>
            <h1>User List</h1>
            <UserTable users={users} />
        </div>
    );
}


export default Users;
