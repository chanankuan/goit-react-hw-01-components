import { styled } from 'styled-components';
import { ListItem } from 'components/List.styles';

const Wrapper = styled(ListItem)`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.color || 'gray'};

  span {
    color: #fff;

    &:first-child {
      font-size: 14px;
    }

    &:last-child {
      font-size: 20px;
    }
  }
`;

export default function StatItem({ color, stats }) {
  return (
    <Wrapper color={color}>
      <span>{stats.label}</span>
      <span>{stats.percentage}</span>
    </Wrapper>
  );
}
