const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initioalState = {
    dialogsData: [
        { id: '1', name: 'Alex' },
        { id: '2', name: 'Dima' },
        { id: '3', name: 'Sister' },
        { id: '4', name: 'Mom' },
        { id: '5', name: 'Dad' },
        { id: '6', name: 'Diana' }
    ],
    messagesData: [
        { id: '1', message: 'Hi!' },
        { id: '2', message: 'How are yoy?' },
        { id: '3', message: "I'm fine, thank you!)" },
        { id: '4', message: 'YO' },
        { id: '5', message: 'YO' }
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initioalState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: '5',
                message: state.newMessageText
            };
    
            state.messagesData.push(newMessage);
            state.newMessageText = '';

            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;

            return state;

        default: 
            return state;
    }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });


export default dialogsReducer;