import './Posts.css';
import Post from './Post';
import React from 'react';

const Posts = (props) => {
    let postsElements = [
        props.posts.map(p => <Post message={p.text} like={p.like} name={p.name}/>)
    ]
    let newPostElement= React.createRef();
    
    let addNewPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updatePostText(text);
    }
    return (
        <div className='posts'>
            <div>
                <input placeholder='Yesterday I was dru...' className='input' onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <button onClick={addNewPost}>Send</button>
            </div>
            {postsElements}
        </div>
    )
}

export default Posts;