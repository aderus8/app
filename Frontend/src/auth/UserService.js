import axios from 'axios';
import AuthHeader from './AuthHeader';

const API_URL = "http://localhost:8080/user/";

class UserService {

    getAll(){
        return axios.get(API_URL + 'user', { headers: AuthHeader() });
    }
    getUsers = () => {
        const token = localStorage.getItem('token');
        const axiosInstance = axios.create({
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        return axiosInstance.get('http://localhost:8080/user/all')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }


}
export default new UserService();
