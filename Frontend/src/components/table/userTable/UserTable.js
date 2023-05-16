import React from 'react';
import "./UserTable.css";
import AuthService from "../../../auth/AuthService";
import axios from "axios";

const UserTable = ({ users }) => {

    // UPDATE NIE DZIAŁA
    // UNCAUGHT IN PROMISE ?
    const update = (id, status) => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Brak tokenu');
            return;
        }

        const axiosInstance = axios.create({
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });

        return axiosInstance.put("http://localhost:8080/user/update", {
            "id": id,
            "status": status
        }).then(res => {
            console.log(res);
            return res;
        });
    }


    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Contact Number</th>
                {/*<th>Password</th>*/}
                <th>Status</th>
                <th>Update</th>
                <th>Delete</th>
                {/*<th>Role</th>*/}
            </tr>
            </thead>
            <tbody>
            {users.map(user => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.contactNumber}</td>
                    {/*<td>{user.password}</td>*/}
                    <td>{user.status}</td>
                    <td> <button onClick={() => {update(user.id, user.status)}}>update{user.id}</button></td>
                    <td>{user.id}, {user.status}</td>
                    {/*<td>{user.role}</td>*/}
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default UserTable;
