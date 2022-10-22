import css from '../friendList.module.css'


export const FriendListItem = ({ avatar, name, isOnline, id }) => {

    return <li className={css.item} >
        <span className={css.status}></span>
        <div className={isOnline ? css.true : css.false}></div>
        <img className={avatar} src={avatar} alt={name} width="48" />
        <p className='name'>{name}</p>
    </li>

}



