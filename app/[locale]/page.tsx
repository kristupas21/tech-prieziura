'use client';

import { useTranslations } from 'next-intl';
import { useMenuScroll } from '@/app/hooks/MenuScrollCtx';
import SectionReviews from '@/components/section-reviews/section-reviews';
import SectionIntro from '@/components/section-intro/section-intro';
import SectionServices from '@/components/section-services/section-services';
import { AppAffix } from '@/components/app-affix/app-affix';
import PageSection from '@/app/[locale]/page-section';
import SectionQuery from '@/components/section-query/section-query';
import SectionStats from '@/components/section-stats/section-stats';
import { GLOBAL_ENABLED } from '@/app/constants';

export default function Home() {
  const t = useTranslations();
  const { el2: { targetRef: t2 } } = useMenuScroll();

  if (!GLOBAL_ENABLED()) {
    return <main>Site under construction</main>;
  }

  return (
    <main>
      <PageSection spaceAfter="md">
        <SectionStats />
      </PageSection>
      <PageSection>
        <SectionIntro />
      </PageSection>
      <PageSection title={t('page.services')}>
        <SectionServices />
      </PageSection>
      <PageSection title={t('page.reviews')}>
        <SectionReviews />
      </PageSection>
      <PageSection title={t('page.query')} spaceAfter="md">
        {/* @ts-ignore */ }
        <SectionQuery ref={t2} />
      </PageSection>
      <AppAffix />
    </main>
  );
}
