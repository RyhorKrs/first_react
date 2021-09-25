import c from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Posts from './MyPosts/Posts';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <Posts posts={props.state.postsData} addPost={props.addPost} />
        </div>
    )
}

export default Profile;