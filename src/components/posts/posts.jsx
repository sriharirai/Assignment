import React  from "react";

class Posts extends React.Component{
    render() {
        return (<div>
           posts by {this.props.match.params.username}
        </div>)
    }
}

export default Posts;
