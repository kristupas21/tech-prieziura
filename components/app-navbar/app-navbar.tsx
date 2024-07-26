'use client';

import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import variables from '@/styles/variables.module.scss';
import {
  Burger,
  Button, Flex, Center, Divider,
} from '@mantine/core';
import LocaleDropdown from '@/components/locale-dropdown/locale-dropdown';
import { useLocale, useTranslations } from 'next-intl';
import { useMenuScroll } from '@/app/hooks/MenuScrollCtx';
import { IconEdit, IconHome } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import TpLogo from '@/assets/tp-logo.svg';
import styles from './app-navbar.module.scss';

const vars = variables as { mobile: string };

export default function NavBar() {
  const [opened, { toggle }] = useDisclosure();
  const mobile = useMediaQuery(`(max-width: ${vars.mobile}`);
  const t = useTranslations();
  const locale = useLocale();
  const { el2: { scrollIntoView: s2 } } = useMenuScroll();
  const route = usePathname();
  const isCerts = route.includes('/certs');

  const menu = (
    <Flex gap="md" align="center">
      <Flex gap="xs">
        {isCerts ? (
          <Button leftSection={<IconHome />} component="a" href="/" color="secondary.8" autoContrast>
            {t('navbar.home')}
          </Button>
        ) : (
          <>
            <Button leftSection={<IconEdit />} color="secondary.8" autoContrast onClick={() => s2()}>
              {t('navbar.query')}
            </Button>
            <Button component="a" href={`/${locale}/certs`} color="secondary.8" autoContrast>
              {t('navbar.certs')}
            </Button>
          </>
        )}
      </Flex>
      <Divider orientation="vertical" />
      <LocaleDropdown />
    </Flex>
  );

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Flex mih={50} gap="md" align="center" justify="space-between" p="xs" py={4}>
          <Flex direction="column" p={0} gap={4}>
            <Center fw="600" fz="sm" w="100%" c="primary.9">
              <Link href="/">
                <TpLogo width={120} />
              </Link>
            </Center>
          </Flex>
          {mobile ? (
            <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />
          ) : menu}
        </Flex>
      </div>
    </header>
  );
}
