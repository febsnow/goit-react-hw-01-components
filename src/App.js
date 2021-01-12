import React from 'react';
import UserProfile from './components/UserProfile/UserProfile';
import Statistics from './components/Statistics/Statistics';
import FriendsList from './components/FriendsList/FriendsList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './data/user.json';
import statisticsData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

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
