import { useTranslations } from 'next-intl';

export default function Services() {
  const t = useTranslations();

  return (
    <main>
      {t('services.link')}
    </main>
  );
}
