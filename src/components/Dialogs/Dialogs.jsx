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
    return (
        <div className={c.dialogs}>
            <div className={c.dialogList}>
                <DialogItem name="Alex" id="1" />
                <DialogItem name="Dima" id="2" />
                <DialogItem name="Sister" id="3" />
                <DialogItem name="Mom" id="4" />
                <DialogItem name="Dad" id="5" />
                <DialogItem name="Diana" id="6" />
            </div>
            <div className={c.messages}>
                <Message message="Hi!" />
                <Message message="How are yoy?" />
                <Message message="I'm fine, thank you!)" />
                <Message message="YO" />
                <Message message="YO" />
            </div>
        </div>
    )
}

export default Dialogs;