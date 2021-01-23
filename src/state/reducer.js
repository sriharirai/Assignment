import {createReducer} from "@reduxjs/toolkit";
import {updatePosts, updateUsers} from "./action";

const initialState = {
    users:[],
    posts:[]
}

export default createReducer(initialState,{
    [updateUsers] : (state,action) => {
        state.users = action.payload.users;
    },
    [updatePosts] : (state,action) => {
        state.posts = action.payload.posts;
    }
})
