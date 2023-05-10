import React from 'react';
import "./UserTable.css";

const UserTable = ({ users }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Contact Number</th>
                <th>Password</th>
                <th>Status</th>
                <th>Role</th>
            </tr>
            </thead>
            <tbody>
            {users.map(user => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.contactNumber}</td>
                    <td>{user.password}</td>
                    <td>{user.status}</td>
                    <td>{user.role}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default UserTable;
