import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messagesData.map(m => <Message message={m.message} />);

    let onAddMessage = () => {
        props.addMessage();
    };

    let onMessageTextChange = (e) => {   /// реализация через объект event (чтобы не использ. рефы)
        let text = e.target.value;
        props.updateNewMessageText(text);
    };

    return (
        <div className={c.dialogs}>
            <div className={c.dialogList}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                {messagesElements}
                <div>
                    <div className={c.new_message}>
                        <textarea onChange={onMessageTextChange} cols="50" rows="2" 
                        value={props.state.newMessageText} placeholder="Enter your message..."></textarea>
                    </div>
                    <div>
                        <button onClick={onAddMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;