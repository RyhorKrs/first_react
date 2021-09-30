import React from 'react';
import c from './Posts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profilePageReducer';

const Posts = (props) => {
    let postsElements = props.posts.map( p => <Post message={p.message} like_counter={p.likesCount} />);

    let newPostTextarea = React.createRef();

    let addPost = () => {
        //props.addPost();
        props.dispatch(addPostActionCreator());
    };

    let onPostTextChange = () => {
        let text = newPostTextarea.current.value;
        //props.updateNewPostText(text);
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <div className={c.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostTextChange} cols="30" rows="3" ref={newPostTextarea} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={c.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default Posts;