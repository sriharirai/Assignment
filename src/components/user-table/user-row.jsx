import React from "react";
import {Link} from "react-router-dom";

const UserRow = ({user = {}}) => (<tr>
    <td>{user.name}</td>
    <td>{user.company && user.company.name}</td>
    <td><Link to={`/users/${user.id}/posts`}>View posts</Link></td>
</tr>)

export default UserRow;
