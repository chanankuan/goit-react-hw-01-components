import { List } from 'components/List.styles';
import FriendCard from './FriendCard';
import getRandomHexColor from 'helper/getRandomHexColor';

export default function FriendList({ friends }) {
  const friendList = friends.map(friend => {
    return (
      <FriendCard key={friend.id} color={getRandomHexColor()} {...friend} />
    );
  });

  return <List>{friendList}</List>;
}
