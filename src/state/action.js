import {createAction} from "@reduxjs/toolkit";

export const updateUsers = createAction("users/update",
    (users) => ({payload:{users}})
)

export const updatePosts = createAction("posts/update",
    (posts) => ({payload:{posts}})
)

export const updatePost = createAction("post/update",
    (post) => ({payload:{post}})
)

export const updateComments = createAction("comments/update",
    (comments) => ({payload:{comments}})
)

