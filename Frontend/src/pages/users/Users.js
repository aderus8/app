import React, {useEffect, useState} from "react";
import axios from 'axios';
import UserTable from "../../components/table/userTable/UserTable";


const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);


    const getUsers = () => {
        const token = localStorage.getItem('token');
        const axiosInstance = axios.create({
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });

        axiosInstance.get('http://localhost:8080/user/all')
            .then(response => {
                console.log(response.data);
                setUsers(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }


    return (
        <div style={{marginTop : '100px', display:"flex", alignItems: "center", flexDirection: "column"}}>
            <h1>User List</h1>
            <UserTable users={users} />
        </div>
    );
}


export default Users;
