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
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed!');
    },
    addPost() {
        let newPost = {
            id: '5',
            message: this._state.profilePage.newPostText,
            likesCount: '0'
        };

        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
};

export default store;
