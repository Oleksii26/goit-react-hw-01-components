import { friends } from "./friends"

export const FriendList = () => {
    return <ul className="friend-list">
        {friends.map(e => {
            return <li className="item" key={e.id} >
                <span className="status">{e.isOnline}</span>
                <img className="avatar" src={e.avatar} alt={e.name} width="48" />
                <p className="name">{e.name}</p>
            </li>
        })}
    </ul>
}