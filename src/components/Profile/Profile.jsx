import c from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Posts from './MyPosts/Posts';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <Posts posts={props.state.postsData}
                dispatch={props.dispatch}
                newPostText={props.state.newPostText} />
        </div>
    )
}

export default Profile;