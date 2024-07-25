import { useTranslations } from 'next-intl';
import {
  Box, Card, SimpleGrid,
} from '@mantine/core';
import CountUp from 'react-countup';

type SIProps = {
    count: number;
    hero: string;
    sub: string;
}

function StatItem({ hero, sub, count }: SIProps) {
  return (
    <Card
      withBorder
      // @ts-ignore
      justify="center"
      fz={24}
      fw={700}
      tt="uppercase"
      gap="sm"
      c="secondary.9"
      bg="transparent"
      p="xl"
    >
      <Box component="span" c="primary.0" fz={36}>
        <CountUp start={0} end={count} />
        {hero}
      </Box>
      <Box component="span">{sub}</Box>
    </Card>
  );
}

export default function SectionStats() {
  const t = useTranslations();

  return (
  // @ts-ignore
    <SimpleGrid cols={{ base: 1, sm: 2 }} m={0} spacing="md" align="center">
      <StatItem count={30} hero={` ${t('page.exp')}`} sub={t('page.exp1')} />
      <StatItem count={100} hero="+" sub={t('page.objects')} />
    </SimpleGrid>
  );
}
