import React from "react";
import nullpic from '../../Assets/Images/nullpic.jpg';
import s from './Users.module.css';
import { NavLink } from "react-router-dom";
import Paginator from '../Common/FormsControls/Paginator/Paginator'

let Users = ({currentPage,usersTotalCount,pageSize,onPageChanged,...props}) => {

    return (
        <div className={s.usersList}>
            <Paginator currentPage={currentPage} usersItemsCount={usersTotalCount} 
            pageSize={pageSize} onPageChanged={onPageChanged}/>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={s.userBlock}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : nullpic} className={s.photoUrl} />
                        </NavLink>
                        <div className={s.userInfo}>
                            <NavLink to={'/profile/' + u.id}>
                                <div className={s.name}>{u.name}</div>
                            </NavLink>
                            <div className={s.status}>{u.status}</div>
                            <div className={s.city}>{"u.location.city"}</div>
                            <div className={s.country}>{"u.location.country"}</div>
                            <div>
                                {u.followed
                                    ? <button className={s.button} disabled={props.followingInProgress.includes(u.id)} 
                                    onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                                    : <button className={s.button} disabled={props.followingInProgress.includes(u.id)} 
                                    onClick={() => {props.follow(u.id)}}>Follow</button>}
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users;