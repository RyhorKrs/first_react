import c from './Profile.module.css';
import Posts from './MyPosts/Posts';

const Profile = () => {
    return (
        <div className={c.content}>
            <div>
                <img src="https://thumbs.dreamstime.com/b/%D0%B4%D0%BB%D0%B8%D0%BD%D0%BD%D0%B0%D1%8F-%D0%B3%D0%BE%D1%80%D0%B8%D0%B7%D0%BE%D0%BD%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%B0-%D0%BA%D1%80%D0%B0%D1%81%D0%BE%D1%87%D0%BD%D1%8B%D1%85-%D1%8F%D1%80%D0%BA%D0%B8%D1%85-%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D1%8C-112964815.jpg" />
            </div>
            <div>ava + description</div>
            <Posts />
        </div>
    )
}

export default Profile;