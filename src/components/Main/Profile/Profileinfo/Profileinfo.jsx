import s from './Profileinfo.module.css';
import Preloader from '../../../Common/Preloader/Preloader'

const Profileinfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profile}>
            <img src={props.profile.photos.large} className={s.bigimg}></img>
            <div className={s.personinfo}>
                <img src={props.profile.photos.small} className={s.avaimg}></img>
                <div className={s.textinfo}>
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