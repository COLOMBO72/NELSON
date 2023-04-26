import s from './Profileinfo.module.css';
import Preloader from '../../Common/Preloader/Preloader'
import nullpic from '../../../Assets/Images/nullpic.jpg'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import { NavLink } from 'react-router-dom';
import Modal from './Modal'
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';

const Profileinfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

    const [modalActive, setModalActive] = useState(false)
    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader />
    }

    const onSubmit = (formData) => {
        saveProfile(formData);
        setEditMode(false);
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }
    return (
        <div className={s.profile}>
            {/* <img src={props.profile.photos.large} className={s.bigimg}></img> */}
            <div className={s.personinfo}>
                {/* {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />} */}
                <img src={profile.photos.large != null ? profile.photos.large : nullpic}
                    className={s.avaimg}
                    onClick={() => setModalActive(true)}></img>
                <div className={s.dataPlaces}>
                    <b>Status:</b> <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                    {editMode ? 
                    <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} /> 
                    : <ProfileData isOwner={isOwner} activeEditMode={() => {setEditMode(true)}} profile={profile}/>}
                </div>
            </div>
            <div className={s.photosBlock}>
                <h1>Photos</h1>
                <div>
                    photo1
                </div>
            </div>
            {isOwner && <Modal active={modalActive} onChange={onMainPhotoSelected} setActive={setModalActive} />}
        </div>
    )
}

const ProfileData = ({ profile, isOwner, activeEditMode }) => {
    return (
        <div className={s.textinfo}>
            {isOwner && <button onClick={activeEditMode}>Edit</button>}
            <div className={s.info}>{profile.fullName}</div>
            <div className={s.info}>{profile.lookingForAJob ? "yes" : "no"}</div>
            <div className={s.info}>{profile.lookingForAJob && 
            <div>
                My professional skills: {profile.lookingForAJobDescription}</div>}
            </div>
            <div className={s.info}>{profile.aboutMe}</div>
        </div>
    )

}

const Contacts = ({ contactTitle, contactValue }) => {
    return (
        <div>
            <b>{contactTitle}: {contactValue}</b>
        </div>
    )
}

export default Profileinfo; 