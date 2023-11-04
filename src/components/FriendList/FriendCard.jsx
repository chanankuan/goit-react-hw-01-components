import { styled } from 'styled-components';
import { ListItem } from 'components/List.styles';

const Card = styled(ListItem)`
  display: flex;
  align-items: center;
  column-gap: 10px;
  border: 1px solid ${props => props.color};
  border-radius: 5px;
  margin-bottom: 10px;
  transition: transform 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: scale(1.05);
  }

  .status {
    width: 10px;
    height: 10px;
    background-color: ${props => (props.isOnline ? 'green' : 'red')};
    border-radius: 50%;
  }
`;

export default function FriendCard({ avatar, name, isOnline, color }) {
  return (
    <Card isOnline={isOnline} color={color}>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </Card>
  );
}
