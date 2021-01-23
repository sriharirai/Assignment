const axios = require('axios');

const client = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getUsers = async () =>  (await client.get("/users")).data;
export const getPosts = async (userId) =>  (await client.get(`/posts?userId=${userId}&skip=0&limit=10`)).data;
export const getPost = async (id) =>  (await client.get(`/posts/${id}`)).data;
export const getComments = async (id) =>  (await client.get(`/posts/${id}/comments`)).data;
export const deleteComment = async (id) =>  (await client.delete(`/posts/${id}`)).data;
