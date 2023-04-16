import './Main.css';
import News from './News/News';
import Settings from './Settings/Settings';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './Dialogs/DialogsContainer';
import UsersContainer from './Users/UsersContainer';
import FriendsContainer from './Friends/FriendsContainer';
import ProfileContainer from './Profile/ProfileContainer';

const Main = () => {
    return (
        <main className='main'>
            <Routes>
                <Route path='/profile/:userId' element={<ProfileContainer />} />
                <Route path='/profile/' element={<ProfileContainer/>}/>
                <Route path='/dialogs' element={<DialogsContainer />} />
                <Route path='/news' element={<News />} />
                <Route path='/friends' element={<FriendsContainer />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/users' element={<UsersContainer/>}/>
            </Routes>
        </main>
    )
}

export default Main;