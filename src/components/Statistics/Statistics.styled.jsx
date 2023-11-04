import { styled } from 'styled-components';
import { List } from 'components/List.styles';

export const Section = styled.section`
  width: 300px;
  text-align: center;
  border: 1px solid red;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: gray;
`;

export const StatsList = styled(List)`
  display: grid;
  grid-template-columns: repeat(${props => props.statslength}, 1fr);
`;
