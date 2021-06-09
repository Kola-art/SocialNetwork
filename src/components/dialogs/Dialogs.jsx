import React from 'react';
import { NavLink, Redirect } from "react-router-dom";
import DialogItem from './dialogItem/DialogsItem';
import Message from './message/Message';
import s from './Dialogs.module.css';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/preloader/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';



const Dialogs = (props) => {

    let state = props.dialogsPage;
    
    let dialogsElements = state.dialogs.map( dialog => <DialogItem name={ dialog.name } key={dialog.id} id={ dialog.id } /> );
    let messagesElements = state.messages.map(m => <Message message={ m.message } key={m.id} />);
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }
    
    if(!props.isAuth){
      return <Redirect to={'/login'} />;
    };

    return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            { dialogsElements }
        </div>
        <div className = { s.messages }>
           <div>{ messagesElements }</div> 
        </div>
          <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>  
    );
}
const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
       <div>
         <Field component={Textarea} validate={[required, maxLength50]}
         name="newMessageBody" palceholder="Enter your message" />
        </div>
        <div><button>Send</button></div>
    </form>
  )
}
const AddMessageFormRedux = reduxForm({
  form: "dialogAddMessageForm"
})(AddMessageForm);
export default Dialogs;