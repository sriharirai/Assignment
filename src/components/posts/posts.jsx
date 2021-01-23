import React  from "react";
import {getPosts} from "../../api";

class Posts extends React.Component{
    async componentDidMount (){
        const posts = await getPosts(this.props.match.params.id);
        this.props.updatePosts(posts);
    }

    render() {
        return (<div>
            {JSON.stringify(this.props.posts)}
        </div>)
    }
}

export default Posts;
