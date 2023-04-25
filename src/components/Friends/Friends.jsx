import './Friends.module.css';
import s from './Friends.module.css';
import Friendblock from './Friendblock/Friendblock';

const Friends = (props) => {

    let state = props.friendsPage;

    let friendElement = state.friends.map(f => <Friendblock name={f.name} secondname={f.secondname}/>)

    return (
        <div className={s.friendslist}>
            {friendElement}
        </div>
    )
}

export default Friends;