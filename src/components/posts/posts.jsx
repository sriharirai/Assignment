import React  from "react";
import {getPosts} from "../../api";
import {Link} from "react-router-dom";

class Posts extends React.Component{
    async componentDidMount (){
        const posts = await getPosts(this.props.match.params.id);
        this.props.updatePosts(posts);
    }

    render() {
        return (<div>
            {this.props.posts.map((post,i) => (<Post post={post} key={i}/>))}
        </div>)
    }
}

const Post = ({post}) =>
    (<div>
        <span>{post.title}</span>
        <span>{post.body}</span>
        <Link to={`/posts/${post.id}`}>View full post</Link>
    </div>)

export default Posts;
