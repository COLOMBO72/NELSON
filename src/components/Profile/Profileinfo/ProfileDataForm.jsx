import s from './Profileinfo.module.css';
import React from 'react';
import { Input, Textarea, createField } from '../../Common/FormsControls/FormsControls'
import { reduxForm } from 'redux-form';


const ProfileDataForm = ({ handleSubmit }) => {
    return (
        <form className={s.textinfo} onSubmit={handleSubmit}>
            <button onClick={() => {}}>save</button>
            <div className={s.info}><b>Fullname: </b>{createField("Fullname", Input, [], "fullName")}</div>
            <div className={s.info}><b>Looking for a job: </b>{createField("", Input, [], "lookingForAJob", {type: "checkbox"})}</div>
            <div className={s.info}><b>My professional skills:</b>{createField("What I can do?", Textarea, [], "lookingForAJobDescription")}</div>
            <div className={s.info}><b>About me: </b>{createField("Who I am?", Textarea, [], "aboutMe")}</div>
            {/* <div className={s.info}><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
            </div> */}
        </form>
    )
}


const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;