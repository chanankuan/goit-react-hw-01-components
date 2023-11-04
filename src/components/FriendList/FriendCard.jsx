import { Card } from './FriendList.styled';

export default function FriendCard({ avatar, name, isOnline, color }) {
  return (
    <Card isOnline={isOnline} color={color}>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </Card>
  );
}
