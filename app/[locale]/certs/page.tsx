'use client';

import { useTranslations } from 'next-intl';
import PageSection from '@/app/[locale]/page-section';
import Image from 'next/image';
import { Center } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import variables from '@/styles/variables.module.scss';

const vars = variables as { mobile: string; tablet: string; };
const width = 1240;
const height = 1754;

// 1240 x 1754
export default function Certs() {
  const t = useTranslations();
  const mobile = useMediaQuery(`(max-width: ${vars.mobile}`);
  const tablet = useMediaQuery(`(max-width: ${vars.tablet}`);

  const getSize = (s: number) => {
    if (mobile) return s / 3;
    if (tablet) return s / 1.7;
    return s / 1.25;
  };

  const w = getSize(width);
  const h = getSize(height);

  return (
    <main>
      <PageSection title={t('certs.supervisionCert')}>
        <Center>
          <Image
            src="/VR-tech-cert.jpg"
            alt={t('certs.supervisionCert')}
            width={w}
            height={h}
          />
        </Center>
      </PageSection>
      <PageSection title={t('certs.projectCert')}>
        <Center>
          <Image
            src="/VR-proj-cert.jpg"
            alt={t('certs.projectCert')}
            width={w}
            height={h}
          />
        </Center>
      </PageSection>
    </main>
  );
}
