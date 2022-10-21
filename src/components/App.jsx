import { Profile } from "./profile/profile";
import { Statistics } from "./statistics/statistics";
import { FriendList } from "./friendList/friendList";
import { TransactionHistory } from "./transactionHistory/transactionHistory";
import friends from './friendList/friends';
import data from './statistics/data';
import user from './profile/user';
import transition from './transactionHistory/transactions.json';


export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics data={data} />
      <FriendList friends={friends} />
      <TransactionHistory transition={transition} />
    </div>
  );
};




