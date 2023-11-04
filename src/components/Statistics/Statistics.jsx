import StatItem from 'components/Statistics/StatItem';
import { getRandomHexColor } from 'helper';
import { Section, Title, StatsList } from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <Title>Upload stats</Title>}
      <StatsList statslength={stats.length}>
        {stats.map(stat => {
          return (
            <StatItem key={stat.id} stats={stat} color={getRandomHexColor()} />
          );
        })}
      </StatsList>
    </Section>
  );
}
