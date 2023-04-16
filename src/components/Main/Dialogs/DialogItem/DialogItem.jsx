import { NavLink } from 'react-router-dom';
import s from '../Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

/*const DialogItems = (props) => {
    return (
            <div className={s.dialogborder}>
                <img className={s.borderimg} src='https://www.kino-teatr.ru/news/15865/143634.jpg' />
                <div>
                    <div className={s.dlgname}><b>{props.name} {props.secondname}</b></div>
                    <div className={s.message}>{props.text}</div>
                </div>
                <p className={s.dialogdate}>{props.date}</p>
            </div>
    )
}*/

export default DialogItem;