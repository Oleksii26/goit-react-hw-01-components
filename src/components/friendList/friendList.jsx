import { friends } from "./friends"
import css from './friendList.css'

export const FriendList = () => {
    return <ul className="list">
        {friends.map(e => {
            return <li className="item" key={e.id} >
                <span className="status">{e.isOnline}</span>
                <img className="avatar-friends" src={e.avatar} alt={e.name} width="48" />
                <p className="name">{e.name}</p>
            </li>
        })}
    </ul>
}