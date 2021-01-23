import {createReducer} from "@reduxjs/toolkit";
import {updateComments, updatePost, updatePosts, updateUsers} from "./action";

const initialState = {
    users:[],
    posts:[],
    post:{},
    comments:[]
}

export default createReducer(initialState,{
    [updateUsers] : (state,action) => {
        state.users = action.payload.users;
    },
    [updatePosts] : (state,action) => {
        state.posts = action.payload.posts;
    },
    [updatePost] : (state,action) => {
        state.post = action.payload.post;
    },
    [updateComments] : (state,action) => {
        state.comments = action.payload.comments;
    },
})
