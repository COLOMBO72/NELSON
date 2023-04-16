import './Dialogs.module.css';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)
    let messageElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id} />)
    let newMessageBody = state.newMessageBody;

    let sendMessageClick = () => {
        props.sendMessage();
    }
    let newMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div>
                        <input value={newMessageBody} onChange={newMessageChange} placeholder='Enter your message'></input>
                        <button className='btn_sendmsg' onClick={sendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;