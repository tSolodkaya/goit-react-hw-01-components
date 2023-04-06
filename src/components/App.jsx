import Profile from './Profile/Profile.jsx';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import Statistics from 'components/Statistics/Statistics.jsx';
import FriendList from 'components/FriendList/FriendList.jsx';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory.jsx';
export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
