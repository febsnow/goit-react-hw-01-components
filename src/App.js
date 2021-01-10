import user from './data/user.json';
import UserProfile from './components/UserProfile/UserProfile';
import statisticsData from './data/statistical-data.json';
import Statistics from './components/Statistics/Statistics';
import friends from './data/friends.json';
import FriendsList from './components/FriendsList/FriendsList';
import transactions from './data/transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

const App = () => {
  return (
    <>
      <UserProfile {...user} />
      <Statistics title="Upload stats" data={statisticsData} />
      <FriendsList list={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;

// <Profile
//   name={user.name}
//   tag={user.tag}
//   location={user.location}
//   avatar={user.avatar}
//   stats={user.stats}
// />

/* <Statistics title="Upload stats" stats={statisticalData} />; */
/* <Statistics stats={statisticalData} />; */
