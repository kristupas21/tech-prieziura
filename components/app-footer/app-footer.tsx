import {
  Flex, Space, Text,
} from '@mantine/core';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import styles from './app-footer.module.scss';

const year = new Date().getFullYear();

export default function AppFooter() {
  const locale = useLocale();
  const t = useTranslations();

  return (
    <Flex
      className={styles.footer}
      p="xl"
      component="footer"
      bg="secondary.9"
      c="white"
      align="center"
      direction="column"
    >
      <div>
        {t('footer.copyright')}
        {' '}
        &#169; tech-prieziura.lt
      </div>
      <Text size="xs">{year}</Text>
      <Space h="sm" />
      <Flex direction="column" ta="center" fz="sm">
        <Link href="/">{t('footer.home')}</Link>
        <Link href={`/${locale}/about`}>{t('footer.bio')}</Link>
        <Link href={`/${locale}/services`}>{t('footer.services')}</Link>
        <Link href={`/${locale}/certs`}>{t('footer.certs')}</Link>
      </Flex>
    </Flex>
  );
}
