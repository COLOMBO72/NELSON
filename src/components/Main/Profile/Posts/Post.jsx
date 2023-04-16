import './Post.css';

const Post = (props) => {
    return (
        <div className='postblock'>
            {props.name}
            <img src='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg&q=60'></img>
            {props.message}
            <span>Like {props.like}</span>
        </div>
    )
}

export default Post;