import React from 'react';
import Posts from './Posts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profilePageReducer';

const PostsContainer = (props) => {
    let state = props.store.getState().profilePage;

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostTextChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <Posts addPost={addPost} 
            updateNewPostText={onPostTextChange} 
            newPostText={state.newPostText}
            posts={state.postsData}/>
    );
};

export default PostsContainer;