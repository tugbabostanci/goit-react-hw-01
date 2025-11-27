import FriendListItem from '../FriendsListItem/FriendsListItem.jsx';
import styles from '../FriendsList/FriendsList.module.css';

const FriendLists = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendLists;