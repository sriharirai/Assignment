import Post from "./post";
import {connect} from "react-redux";
import {updatePost,updateComments} from "../../state/action";

const mapStateToProps = ({post,comments}) => ({post,comments})

const mapDispatchToProps = (dispatch) => ({
    updatePost:(posts) => dispatch(updatePost(posts)),
    updateComments:(posts) => dispatch(updateComments(posts))
});


export default connect(mapStateToProps,mapDispatchToProps)(Post)
