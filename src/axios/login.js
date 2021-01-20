import axios from 'axios';

// the below is for local development
const baseURL = 'http://127.0.0.1:8000/';
//  use the below for deployed work
// const baseURL = 'https://django-ocr-backend.herokuapp.com/';

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
    },
});

export default axiosInstance;