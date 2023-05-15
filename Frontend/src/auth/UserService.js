import axios from 'axios';
import AuthHeader from './AuthHeader';

const API_URL = "http://localhost:8080/user/";

class UserService {

    getPublicContent(){
        return axios.get(API_URL + "all");
    }

    getUserBoard(){
        return axios.get(API_URL + 'all', {headers: AuthHeader()});
    }
}
export default new UserService();
