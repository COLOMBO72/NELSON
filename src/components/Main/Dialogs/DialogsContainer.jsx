import { sendMessage, updateNewMessageBody } from '../../../Redux/dialogReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
    }
}

export default connect(mapStateToProps, {
    updateNewMessageBody,
    sendMessage,
})(Dialogs);