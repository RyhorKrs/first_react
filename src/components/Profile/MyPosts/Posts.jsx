import c from './Posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {
    let postsElements = props.posts.map( p => <Post message={p.message} like_counter={p.likesCount} />);

    return (
        <div className={c.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea cols="30" rows="3"></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={c.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default Posts;