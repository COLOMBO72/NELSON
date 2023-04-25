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
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {

        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 3, message: body }],
            };

        default:
            return state;
    }
}

export const sendMessage = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });
export default dialogReducer;