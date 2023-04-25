import './Post.css';
import nullpic from '../../../Assets/Images/nullpic.jpg'

const Post = (props) => {
    return (
        <div className='postblock'>
            {props.name}
            <img src={nullpic}></img>
            {props.message}
            <span>Like {props.like}</span>
        </div>
    )
}

export default Post;