import { styled } from 'styled-components';
import { ListItem } from 'components/List.styles';

// const Wrapper = styled('li')(props => {
//   return {
//     display: 'flex',
//     flexDirection: 'column',
//     backgroundColor: `${props.color || 'gray'}`,
//     padding: '10px 0',

//     span: {
//       color: '#fff',
//       '&:first-child': {
//         fontSize: '14px',
//       },
//       '&:last-child': {
//         fontSize: '20px',
//       },
//     },
//   };
// });

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
