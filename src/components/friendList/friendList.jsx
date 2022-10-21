import css from './friendList.module.css';

export const FriendList = ({ friends }) => {
    return <ul className={css.list}>
        {friends.map(e => {
            return <li className={css.item} key={e.id} >
                <span className={css.status}>{e.isOnline}</span>
                <img className={css.avatar} src={e.avatar} alt={e.name} width="48" />
                <p className={css.name}>{e.name}</p>
            </li>
        })}
    </ul>
}