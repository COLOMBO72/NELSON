import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator, minLengthCreator } from '../../utils/validators'

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'MessageBody'} component={'textarea'} validate={[required,maxLengthCreator(50),minLengthCreator(1)]} placeholder='Enter your message'></Field>
            <button>Send</button>
        </form>
    )
}

const AddMesageReduxForm = reduxForm({form: 'dialogsAddMessageForm'})(AddMessageForm);

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)
    let messageElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id} />)

    const addNewMessage = (values) => {
        props.sendMessage(values.MessageBody);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <AddMesageReduxForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;