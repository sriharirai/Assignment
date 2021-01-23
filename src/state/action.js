import {createAction} from "@reduxjs/toolkit";

export const updateUsers = createAction("users/update",
    (users) => ({payload:{users}})
)

export const updatePosts = createAction("posts/update",
    (posts) => ({payload:{posts}})
)

