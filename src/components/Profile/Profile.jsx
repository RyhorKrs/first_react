import c from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Posts from './MyPosts/Posts';

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <Posts />
        </div>
    )
}

export default Profile;