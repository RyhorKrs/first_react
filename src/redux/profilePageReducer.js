const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        { id: '1', message: "I learn JS with IT-Kamasutra!", likesCount: "55" },
        { id: '2', message: "Hi, how are you?", likesCount: "10" },
        { id: '3', message: "It's my first post here!", likesCount: "15" }
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: '5',
                message: state.newPostText,
                likesCount: '0'
            };
    
            state.postsData.push(newPost);
            state.newPostText = '';

            return state;
        
            case UPDATE_NEW_POST_TEXT:
                state.newPostText = action.newText; 

                return state;

            default: 
                return state;
    }  
    // не использовали break, т.к. возвращаем в каждом кейсе стэйт, 
    //из-за этого функция прекращает свое действие и не проваливается дальше по кейсам
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;