import c from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={c.dialog}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={c.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={c.message}>{props.message}</div>
    )
}

const Dialogs = () => {

    let dialogsData = [
        {id: '1', name: 'Alex'},
        {id: '2', name: 'Dima'},
        {id: '3', name: 'Sister'},
        {id: '4', name: 'Mom'},
        {id: '5', name: 'Dad'},
        {id: '6', name: 'Diana'}
    ];

    let messagesData = [
        {id: '1', message: 'Hi!'},
        {id: '2', message: 'How are yoy?'},
        {id: '3', message: "I'm fine, thank you!)"},
        {id: '4', message: 'YO'},
        {id: '5', message: 'YO'}
    ];

    let dialogsElements = dialogsData.map( d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = messagesData.map( m => <Message message={m.message} />);

    return (
        <div className={c.dialogs}>
            <div className={c.dialogList}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;