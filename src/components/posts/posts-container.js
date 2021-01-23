import Posts from "./posts";
import {connect} from "react-redux";
import {updatePosts} from "../../state/action";

const mapStateToProps = ({posts}) => ({posts})

const mapDispatchToProps = (dispatch) => ({
    updatePosts:(posts) => dispatch(updatePosts(posts))
});


export default connect(mapStateToProps,mapDispatchToProps)(Posts)
