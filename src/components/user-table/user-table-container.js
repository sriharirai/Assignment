import UserTable from "./user-table";
import {connect} from "react-redux";
import {updateUsers} from "../../state/action";

const mapStateToProps = ({users}) => ({users})

const mapDispatchToProps = (dispatch) => ({
    updateUsers: (users) => dispatch(updateUsers(users))
});


export default connect(mapStateToProps,mapDispatchToProps)(UserTable)
