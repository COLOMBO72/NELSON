import s from './Profileinfo.module.css';
import Preloader from '../../Common/Preloader/Preloader'
import nullpic from '../../../Assets/Images/nullpic.jpg'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const Profileinfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.profile}>
            {/* <img src={props.profile.photos.large} className={s.bigimg}></img> */}
            <div className={s.personinfo}>
                <div className={s.storageImg}>
                    <img src={props.profile.photos.large != null ? props.profile.photos.large : nullpic} className={s.avaimg}></img>
                </div>
                <div className={s.textinfo}>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                    <div className={s.info}>{props.profile.fullName}</div>
                    <div className={s.info}>City</div>
                    <div className={s.info}>Y.O</div>
                    <div className={s.info}>{props.profile.contacts.instagram}</div>
                    <div className={s.info}>{props.profile.aboutMe}</div>
                </div>
            </div>
        </div>
    )
}

export default Profileinfo;