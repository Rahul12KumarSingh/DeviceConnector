const axios = require('axios');
const { getToken } = require('./auth');
const { API_URL } = require('./config');

const instance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    });
    
const request = async ( method , endpoint , payload) => {
    const token = await getToken();
    return instance.get(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        params,
    });
}

