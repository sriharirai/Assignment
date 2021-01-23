import Posts from "./posts";
import {connect} from "react-redux";

const mapStateToProps = ({posts}) => ({posts})

const mapDispatchToProps = () => ({});


export default connect(mapStateToProps,mapDispatchToProps)(Posts)
