import { Profile } from "./profile/profile";
import { Statistics } from "./statistics/statistics";
import { FriendList } from "./friendList/friendList";
import { TransactionHistory } from "./transactionHistory/transactionHistory";

export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics />
      <FriendList />
      <TransactionHistory />
    </div>
  );
};
