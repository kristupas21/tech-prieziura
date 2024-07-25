import { useTranslations } from 'next-intl';
import {
  Box, Button, Space, Stack,
} from '@mantine/core';

type Props = {
    onClick: () => void;
    minHeight: number;
}

export default function QueryFormError({ minHeight, onClick }: Props) {
  const t = useTranslations();

  return (
    <Stack p="xl" bg="primary.1" w="100%" maw={900} mih={minHeight} align="center" justify="center">
      <Box c="red.9">
        <h1>{t('query.oops')}</h1>
      </Box>
      <p>{t('query.errorMessage')}</p>
      <Space h="xl" />
      <Button autoContrast onClick={onClick} color="secondary.8">{t('query.tryAgain')}</Button>
    </Stack>
  );
}
