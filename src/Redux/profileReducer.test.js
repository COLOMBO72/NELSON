import profileReducer from "./profileReducer";
import { addPostCreator, deletePost } from "./profileReducer";
import React from "react";
import { ReactDOM } from "react";

let state = {
    posts: [
        { id: 1, text: 'Hi, how are you?', like: 5, name: 'John' },
        { id: 2, text: 'Its my first post', like: 10, name: 'Charles' },
        { id: 3, text: 'hello my friend', like: 0, name: 'Nelson' }
    ]
};

it('new post added', () => {
    let action = addPostCreator('react-developer');
    let newstate = profileReducer(state, action);
    expect(newstate.posts.length).toBe(4);
});
it('after deleting length of posts should be decrement', () => {
    let action = deletePost(1);
    let newstate = profileReducer(state, action);
    expect(newstate.posts.length).toBe(2);
});
it('new message added', () => {
    let action = addPostCreator('react-developer');
    let newstate = profileReducer(state, action);
    expect(newstate.posts[3].text).toBe('react-developer');
});
it('likes count = 0', () => {
    let action = addPostCreator('react-developer');
    let newstate = profileReducer(state, action);
    expect(newstate.posts[3].like).toBe(0);
});




