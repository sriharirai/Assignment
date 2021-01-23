import {createReducer} from "@reduxjs/toolkit";
import {updateUsers} from "./action";

const initialState = {
    users:[]
}

export default createReducer(initialState,{
    [updateUsers] : (state,action) => {
        state.users = action.payload.users;
    }
})
