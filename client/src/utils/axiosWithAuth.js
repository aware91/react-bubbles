import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getColor('token');
    return axios.create({
        baseURL: 'http://localhost:5000/api',
        header: {
            Authorization: token
        }
    })
}

export default axiosWithAuth;