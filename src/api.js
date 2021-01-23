const axios = require('axios');

const client = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getUsers = async () =>  (await client.get("/users")).data;
export const getPosts= async (userId) =>  (await client.get(`/posts?userId=${userId}&skip=0&limit=10`)).data;
