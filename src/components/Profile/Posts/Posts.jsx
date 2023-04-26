import p from './Posts.module.css';
import Post from './Post';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator, minLengthCreator } from '../../../utils/validators';

const PostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={p.inputField} name={'newPostText'} component={'input'} placeholder={'Yesterday I was dru...'} validate={[required, maxLengthCreator(50), minLengthCreator(1)]} />
            <button className={p.button}>Send</button>
        </form>
    )
}

const AddPostReduxForm = reduxForm({ form: 'AddPostForm' })(PostsForm);

const Posts = React.memo(props => {
    let postsElements = [
        props.posts.reverse().map(p => <Post message={p.text} like={p.like} name={p.name} />)
    ]
    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className='posts'>
            <div className={p.posts}>
                <AddPostReduxForm onSubmit={addNewPost} />
                {postsElements}
            </div>
        </div>
    )
})


export default Posts;