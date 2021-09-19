import c from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {
    return (
        <div>My posts
            <div>
                <textarea cols="30" rows="3"></textarea>
                <button>Add Post</button>
            </div>
            <div className={c.posts}>
                <Post message="I learn JS with IT-Kamasutra!" like_counter="55" />
                <Post message="Hi, how are you?" like_counter="10" />
                <Post message="It's my first post here!" like_counter="15" />
            </div>
        </div>
    )
}

export default Posts;