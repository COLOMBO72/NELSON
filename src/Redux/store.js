import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, text: 'Hi, how are you?', like: 5, name: 'John' },
                { id: 2, text: 'Its my first post', like: 10, name: 'Charles' },
                { id: 3, text: 'hello my friend', like: 0, name: 'Nelson' }
            ],
            newPostText: 'Nelson'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Mona'},
                { id: 2, name: 'Robert' },
            ],
            messages: [
                { id: 1, message: 'Hi, how its going?' },
                { id: 2, message: 'Yesterday I was very good' }
            ],
            newMessageBody: "",
        },
        friendsPage: {
            friends: [
                { id: 1, name: 'Bill', secondname: 'Clinton' },
                { id: 2, name: 'Robert', secondname: 'Pattison' },
                { id: 3, name: 'Jack', secondname: 'Carter' },
                { id: 4, name: 'Elizabeth', secondname: 'Mountaineer' },
            ],
        }
    },
    _callSubscriber() {
        console.log('State is changed')
    },   
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}
