import s from '../Friends.module.css';

const Friendblock = (props) => {

    return (
        <div className={s.friendblock}>
            <img className={s.friendpic} src='https://globalmsk.ru/usr/person/big-person-15632637181.jpg' />
            <div className={s.friendtitle}>
                <div className={s.friendinfo}>{props.name}</div>
                <div className={s.friendinfo}>{props.secondname}</div>
                <div className={s.friendbtns}>
                    <button className={s.friendmsgsend}>Send message</button>
                    <button className={s.frienddel}>Delete friend</button>
                </div>
            </div>
        </div>
    )
}

export default Friendblock;