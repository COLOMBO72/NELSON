import React from "react";
import nullpic from '../../../Assets/Images/nullpic.jpg';
import s from './Users.module.css';
import { NavLink } from "react-router-dom";
import axios from "axios";
import { usersAPI } from "../../../api/api";



let Users = (props) => {

    let pagesCount = Math.ceil(props.usersTotalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 20) {
            pages.push(i);
        }
    }
    return (
        <div className={s.usersList}>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                        onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
                })}
            </div>
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
                                    ? <button disabled={props.followingInProgress.includes(u.id)} 
                                    onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                                    : <button disabled={props.followingInProgress.includes(u.id)} 
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