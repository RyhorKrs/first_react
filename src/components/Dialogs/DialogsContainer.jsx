import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsPageReducer';

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    let onMessageTextChange = (text) => {   /// реализация через объект event (чтобы не использ. рефы)
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    };

    return (
        <Dialogs addMessage={addMessage} 
            updateNewMessageText={onMessageTextChange}
            state={state}
        />
    );
};

export default DialogsContainer;