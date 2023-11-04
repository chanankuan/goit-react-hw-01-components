import { styled } from 'styled-components';
import getRandomHexColor from 'helper/getRandomHexColor';
import StatItem from 'components/Statistics/StatItem';
import { List } from 'components/List.styles';

const Section = styled.section`
  width: 300px;
  text-align: center;
  border: 1px solid red;
`;

const Title = styled.h2`
  font-size: 24px;
  color: gray;
`;

const StatsList = styled(List)`
  display: grid;
  grid-template-columns: repeat(${props => props.statslength}, 1fr);
`;

export default function Statistics({ title, stats }) {
  const statList = stats.map(stat => {
    return <StatItem key={stat.id} stats={stat} color={getRandomHexColor()} />;
  });

  return (
    <Section>
      {title && <Title>Upload stats</Title>}
      <StatsList statslength={stats.length}>{statList}</StatsList>
    </Section>
  );
}
