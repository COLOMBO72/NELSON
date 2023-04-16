import Posts from "./Posts";
import { onPostChangeCreator, addPostCreator } from "../../../../Redux/profileReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updatePostText: (text) => {
            let action = onPostChangeCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);

export default MyPostsContainer;