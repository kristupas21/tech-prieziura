'use client';

import {
  Popover, Button, Stack, ActionIcon,
} from '@mantine/core';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { FC, useState } from 'react';
import { GB, LT, RU } from 'country-flag-icons/react/3x2';
import styles from './locale-dropdown.module.scss';

type LocaleItem = { name: string, Icon: FC };

const locales: LocaleItem[] = [
  { name: 'lt', Icon: LT },
  { name: 'en', Icon: GB },
  { name: 'ru', Icon: RU },
];

export default function LocaleDropdown() {
  const router = useRouter();
  const locale = useLocale();
  const [opened, setOpened] = useState(false);

  const switchLocale = async (newLocale: string) => {
    if (locale !== newLocale) {
      const path = window.location.pathname.replace(`/${locale}`, `/${newLocale}`);
      await router.replace(path);
    }

    setOpened(false);
  };

  const renderButton = ({ name, Icon }: LocaleItem) => (
    <Button
      key={name}
      color="secondary.9"
      variant={locale === name ? 'filled' : 'subtle'}
      autoContrast
      radius={0}
      onClick={() => switchLocale(name)}
      h={30}
      // @ts-ignore
      leftSection={<Icon height={20} width={20} />}
    >
      {name.toUpperCase()}
    </Button>
  );

  const { name: currName, Icon: CurrIcon } = {
    name: locale,
    Icon: locales.find((i) => i.name === locale)?.Icon,
  } as LocaleItem;

  return (
  // @ts-ignore
    <Popover position="bottom" withArrow shadow="md" p={0} opened={opened} onChange={setOpened}>
      <Popover.Target>
        <ActionIcon
          key={currName}
          variant="outline"
          size="lg"
          color="secondary.9"
          bg="white"
          radius="xl"
          onClick={() => setOpened((o) => !o)}
          className={styles.actionBtn}
        >
          {/* @ts-ignore */}
          <CurrIcon height={50} width={50} />
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown p={6} bg="white">
        {/* @ts-ignore */}
        <Stack width="100%" gap="xs" p={0}>
          {locales.map(renderButton)}
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}
