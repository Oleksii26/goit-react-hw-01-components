import { Profile } from "./profile/profile";
import { Statistics } from "./statistics/statistics";
import { FriendList } from "./friendList/friendList";
import { TransactionHistory } from "./transactionHistory/transactionHistory";
import friends from './data/friends'
import data from './data/data';
import user from './data/user';
import transition from './data/transactions';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transition} />
    </div>
  );
};




