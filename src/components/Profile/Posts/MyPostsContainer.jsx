import Posts from "./Posts";
import { addPostCreator } from "../../../Redux/profileReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostCreator(newPostText));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);

export default MyPostsContainer;