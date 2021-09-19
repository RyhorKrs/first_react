import c from './Post.module.css';

const Post = (props) => {
    return (
        <div className={c.item}>
            <img src="http://user-life.com/uploads/posts/2018-08/1535608847_kak-udalit-avatarku-ubrat-postavit-sdelat-zagruzit-dobavit-foto-vkontakte-dlya-telegramma-skaypa-vayber-diskorda.jpg" />
            {props.message}
            <div>
                <span>{props.like_counter} likes</span>
            </div>
        </div>
    )
}

export default Post;