import React  from "react";
import {getPost, getComments,deleteComment} from "../../api";

class Post extends React.Component{
    async componentDidMount (){
        const posts = await getPost(this.props.match.params.id);
        this.props.updatePost(posts);
    }

    async getComments(id){
        const comments = await getComments(id);
        this.props.updateComments(comments);
    }

    async deleteComment(id,userId){
        await deleteComment(id);
        this.props.history.push(`/users/${userId}/posts`);
    }

    render() {
        const post = this.props.post || {};
        const comments = this.props.comments || {};

        return (<div>
            <span>{post.title}</span>
            <span>{post.body}</span>
            <span>
                <button onClick={()=> this.getComments(post.id)}>
                Get Comments</button>
            </span>
            <button onClick={()=> this.deleteComment(post.id ,post.userId)}
            >Delete</button>
            <Comments comments={comments}/>
        </div>)
    }
}

const Comments = ({comments = []}) => (
    <div>
        <span>Comments</span>
        <div>{comments.map((comment,i) =>
            <Comment comment={comment} key={i}/>)}</div>
    </div>
)

const Comment = ({comment = {}}) => (
    <div>
        <span>by {comment.name}</span>
        <span>by {comment.body}</span>
    </div>
)

export default Post;
