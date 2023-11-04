import { styled } from 'styled-components';
import { ListItem } from 'components/List.styles';

export const Card = styled(ListItem)`
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
