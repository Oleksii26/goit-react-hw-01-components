import css from './friendList.module.css'
import { FriendListItem } from './friendListItem/friendListItem'
import PropTypes from  'prop-types'

export const  FriendList = ({ friends }) => {
   
    return <ul className={css.list}>
        {friends.map(({avatar, name, isOnline, id}) => {
          return <FriendListItem 
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          id={id}
          />
        })}
    </ul>
}

// console.log('FriendList')
// console.log('FriendList')
FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired
  }))}