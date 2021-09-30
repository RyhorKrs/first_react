import profileReducer from "./profilePageReducer";
import dialogsReducer from "./dialogsPageReducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: '1', message: "I learn JS with IT-Kamasutra!", likesCount: "55" },
                { id: '2', message: "Hi, how are you?", likesCount: "10" },
                { id: '3', message: "It's my first post here!", likesCount: "15" }
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        }
    },
    _callSubscriber() {
        console.log('State changed!');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch (action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
};


export default store;