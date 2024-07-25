import {
  Card, Group, SimpleGrid, Text, Title, Image as MantineImage, Center, Button, Stack,
} from '@mantine/core';
import { useLocale, useTranslations } from 'next-intl';

export default function SectionServices() {
  const t = useTranslations();
  const locale = useLocale();

  const arr = [
    {
      n: t('services.supervision'),
      l: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      n: t('services.management'),
      l: 'https://images.unsplash.com/photo-1542491873-564432bfb050?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      n: t('services.consultancy'),
      l: 'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <Stack gap="xl">
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }}>
        {arr.map((item) => (
          <Card key={item.n} shadow="lg" padding="lg" radius="md" bg="primary.0">
            <Card.Section>
              <MantineImage src={item.l} height={160} alt={item.n} />
            </Card.Section>
            <Group justify="space-between" mt="md" mb="xs">
              <Title order={3}>{item.n}</Title>
            </Group>
            <Text size="sm" c="dimmed">
              {t('page.introText')}
            </Text>
          </Card>
        ))}
        {/* @ts-ignore */}
        <Card justify="center" radius="md" bg="primary.7">
          <Center h="100%">
            <Button variant="outline" component="a" href={`/${locale}/services`} color="primary.0" autoContrast>
              {t('services.link')}
            </Button>
          </Center>
        </Card>
      </SimpleGrid>
    </Stack>
  );
}
