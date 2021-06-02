import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID EYm-WUkUZ37zxPU2KaMvLKG4IYjthsvxHxdyJxgXdm0'
    }
})