import c from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {

    let postsData = [
        {id: '1', message: "I learn JS with IT-Kamasutra!", likesCount: "55"},
        {id: '2', message: "Hi, how are you?", likesCount: "10"},
        {id: '3', message: "It's my first post here!", likesCount: "15"}
    ];

    let postsElements = postsData.map( p => <Post message={p.message} like_counter={p.likesCount} />);

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