import axios from 'axios';
import 'element-plus/dist/index.css';
import { ElNotification } from 'element-plus';

const service = axios.create({
    baseURL: 'https://baseurl',
});

service.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        ElNotification.error({
            title: 'Ошибка',
            message: error.message,
            showClose: true,
            duration: 0,
        });
        return Promise.reject(error);
    }
);

export default service;
