import axios from 'axios';
import jwt_decode from "jwt-decode";

const API_URL = "http://localhost:8080/user/";

class AuthService {

    login(email, password){
        return axios.post(API_URL + "login", {
            email,
            password
        }).then(response => {
            if(response.data.token){
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
    }

    logout(){
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    }

    register(email, password, name, contactNumber){
        return axios.post(API_URL + "signup", {
            "name": name,
            "email": email,
            "contactNumber": contactNumber,
            "password": password,
        });
    }

    update(id, status){
        const token = localStorage.getItem('token');
        const axiosInstance = axios.create({
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        return axiosInstance.put(API_URL + "update", {
            id,
            status
        });
    }

    getCurrentUserToken(){
        return JSON.parse(localStorage.getItem("user"))
    }

    getMailAndRole(){
        const currentUser = this.getCurrentUserToken();
        if (currentUser) {
            return jwt_decode(localStorage.getItem("token"));
        }
    }

    isAdmin(){
        const decodedToken = jwt_decode(localStorage.getItem("token"));
        return decodedToken.role === "admin";
    }

}

export default new AuthService()
