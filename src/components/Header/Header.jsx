import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <a href='#'>NELSON</a>
            <nav className={s.nav}>
                <NavLink to='/profile'>Profile</NavLink>
                <NavLink to='/dialogs'>Messages</NavLink>
                <NavLink to='/news'>News</NavLink>
                <NavLink to='/friends'>Friends</NavLink>
                <NavLink to='/settings'>Settings</NavLink>
                <NavLink to='/users'>Users</NavLink>
            </nav>
            <div className={s.loginBlock}>
                {
                    props.isAuth ?
                        <div>
                            {props.login}
                            <button onClick={props.logout}>Logout</button>
                        </div>
                        : 
                        <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;