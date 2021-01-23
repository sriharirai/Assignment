import React  from "react";
import {getUsers} from "../../api"
import UserRow from "./user-row";

class UserTable extends React.Component{
    async componentDidMount (){
        const users = await getUsers();
        this.props.updateUsers(users);
    }

    render() {
        const users = this.props.users || [];
        return (<div>
            <table>
                <thead>
                    <th>name</th>
                    <th>company</th>
                    <th>blog posts</th>
                </thead>
                <tbody>
                {users.map(user => <UserRow user={user}/>)}
                </tbody>
            </table>
        </div>)
    }
}

export default UserTable;
