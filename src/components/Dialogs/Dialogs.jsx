import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messagesData.map(m => <Message message={m.message} />);

    let newMessageTextarea = React.createRef();

    let addMessage = () => {
        let text = newMessageTextarea.current.value;
        alert(text);
        newMessageTextarea.current.value = '';
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
                        <textarea cols="50" rows="2" ref={newMessageTextarea}></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;