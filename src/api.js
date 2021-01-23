const axios = require('axios');

const client = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getUsers = async () =>  (await client.get("/users")).data;
