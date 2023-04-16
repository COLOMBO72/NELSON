import { usersAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 1, text: 'Hi, how are you?', like: 5, name: 'John' },
        { id: 2, text: 'Its my first post', like: 10, name: 'Charles' },
        { id: 3, text: 'hello my friend', like: 0, name: 'Nelson' }
    ],
    newPostText: 'Nelson',
    profile: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 4, text: state.newPostText, like: 0, name: 'Jack'
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }

        case UPDATE_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }

        default:
            return state;
    }
}

export const addPostCreator = () => ({ type: ADD_POST });
export const onPostChangeCreator = (text) => ({ type: UPDATE_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
//thunk
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response=> {
        dispatch(setUserProfile(response.data));
    });
}
export default profileReducer;