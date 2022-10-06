import http from '~/utils/http';

async function getUsers() {
    const response = await http.get('/users');
    return response;
}

export default {
    getUsers,
};
