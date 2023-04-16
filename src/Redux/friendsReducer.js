let initialState = {
    friends: [
        { id: 1, name: 'Bill', secondname: 'Clinton' },
        { id: 2, name: 'Robert', secondname: 'Pattison' },
        { id: 3, name: 'Jack', secondname: 'Carter' },
        { id: 4, name: 'Elizabeth', secondname: 'Mountaineer' },
    ],
};

const friendsReducer = (state = initialState, action) => {
    return state;
};

export default friendsReducer;