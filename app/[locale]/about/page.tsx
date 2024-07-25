import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations();

  return (
    <main>
      {t('about.link')}
    </main>
  );
}
