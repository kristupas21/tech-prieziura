import { useTranslations } from 'next-intl';
import { Stack } from '@mantine/core';

type Props = {
    minHeight: number;
}

export default function QueryFormSuccess({ minHeight }:Props) {
  const t = useTranslations();

  return (
    <Stack
      p="xl"
      bg="primary.1"
      w="100%"
      maw={900}
      mih={minHeight}
      align="center"
      justify="center"
    >
      <h1>{t('query.thanks')}</h1>
      <p>{t('query.successMessage')}</p>
    </Stack>
  );
}
