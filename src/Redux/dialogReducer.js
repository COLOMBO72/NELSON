const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Mona' },
        { id: 2, name: 'Robert' },
    ],
    messages: [
        { id: 1, message: 'Hi, how its going?' },
        { id: 2, message: 'Yesterday I was very good' }
    ],
    newMessageBody: "",
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 3, message: body }],
            };

        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };

        default:
            return state;
    }
}

export const sendMessage = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBody = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogReducer;