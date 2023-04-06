import PropTypes from 'prop-types';
import css from 'components/FriendListItem/FriendListItem.module.css';

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span
        className={css.status}
        style={{ backgroundColor: friendStatus(isOnline) }}
      ></span>

      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
};

function friendStatus(online) {
  if (online) {
    return '#008000';
  }
  return '#ff0000';
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendsListItem;
