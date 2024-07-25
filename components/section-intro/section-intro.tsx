import {
  Flex, SimpleGrid, Text, Image as MantineImage, Button, Center, Card,
} from '@mantine/core';
import { useLocale, useTranslations } from 'next-intl';

const profile = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export default function SectionIntro() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }} spacing="md">
      <Card bg="primary.0" p="xl">
        <Flex direction="column" gap={60} justify="center" m="auto 0">
          <h2>{t('page.introHeading')}</h2>
          <Text p="xl">
            {t('page.introText')}
            &nbsp;
            {t('page.introText')}
          </Text>
          <Center>
            <Button component="a" href={`/${locale}/about`} color="secondary.8" autoContrast>
              {t('about.link')}
            </Button>
          </Center>
        </Flex>
      </Card>
      <Card h="600" p={0}>
        <MantineImage src={profile} alt="hero" height={600} />
      </Card>
    </SimpleGrid>
  );
}
