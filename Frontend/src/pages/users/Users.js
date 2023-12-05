import React, {useEffect, useState} from "react";
import axios from 'axios';
import authHeader from "../../auth/AuthHeader";
import "./Users.css";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);


    const getUsers = () => {
        const axiosInstance = axios.create({headers: authHeader()});
        axiosInstance.get('http://localhost:8080/user/all')
            .then(response => {
                console.log(response.data);
                setUsers(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    // UPDATE NIE DZIAŁA
    // UNCAUGHT IN PROMISE ?
    const update = (id, status) => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Brak tokenu');
            return Promise.reject('Brak tokenu');
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
            console.log("RES: " + res.data);
            return res.data;
        }).catch(error => {
            console.error('Error updating user:', error);
            throw error;
        });
    }


        const deleteUser = (id) => {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Brak tokenu');
                return Promise.reject('Brak tokenu');
            }

            const axiosInstance = axios.create({
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });

            return axiosInstance.delete(`http://localhost:8080/user/delete/${id}`)
                .then(res => {
                    console.log("User deleted:", res.data);
                    return res.data;
                }).catch(error => {
                    console.error('Error deleting user:', error);
                    throw error;
                });
        }


        return (
            <div className="users-bg">
                <div style={{marginTop: '100px', display: "flex", alignItems: "center", flexDirection: "column"}}>
                    <h1>User List</h1>
                    <table>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Contact Number</th>
                            {/*<th>Password</th>*/}
                            <th>Status</th>
                            {/*<th>Update</th>*/}
                            {/*<th>Delete</th>*/}
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
                               {/* <td><button onClick={() => {*/}
                               {/*     update(user.id, user.status)*/}
                               {/*         .then(updatedUser => {*/}
                               {/*             console.log('Użytkownik zaktualizowany:', updatedUser);*/}
                               {/*             getUsers();*/}
                               {/*         }).catch(error => {*/}
                               {/*         console.error('Błąd aktualizacji:', error);*/}
                               {/*     });*/}
                               {/* }}>Update*/}
                               {/* </button> </td>*/}
                               {/*<td> <button onClick={() => {*/}
                               {/*     deleteUser(user.id)*/}
                               {/*         .then(deletedUser => {*/}
                               {/*             console.log('Użytkownik usunięty:', deletedUser);*/}
                               {/*             getUsers();*/}
                               {/*         }).catch(error => {*/}
                               {/*         console.error('Błąd usuwania użytkownika:', error);*/}
                               {/*     });*/}
                               {/* }}>Delete*/}
                               {/*</button> </td>*/}
                                {/*<td>{user.role}</td>*/}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }



export default Users;
