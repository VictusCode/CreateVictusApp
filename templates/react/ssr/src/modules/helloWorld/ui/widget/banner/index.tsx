import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDarkMode } from '@/shared/lib/darkMode';
import Image from 'next/image';
import styles from './styles.module.css';

const HelloWorldBanner = () => {
  const { t } = useTranslation('helloWorld');
  const [isDarkMode] = useDarkMode();

  const bannerSrc = useMemo(() => (isDarkMode ? '/bannerDark.png' : '/bannerLight.png'), [isDarkMode]);

  return (
    <div className={styles.container}>
      <Image className={styles.bigIcon} src={bannerSrc} alt={t('banner.bigIcon.alt')} />
      <div className={styles.stackList}>
        <Image src='https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white' alt={t('banner.stackList.typeScript.alt')} />
      </div>
    </div>
  );
};

export { HelloWorldBanner };
