import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Centred } from '@app/layouts/Centred';
import { useDarkMode } from '@shared/lib/darkMode';
import styled from 'styled-components';

const BigLogo = styled.img`
  width: 50%;
  padding-bottom: var(--spacing-xl);
`;

const StackList = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  gap: var(--spacing-xs);

  & > img {
    border-radius: var(--border-radius-xs);
  }
`;

const Home = () => {
  const { t } = useTranslation();
  const [isDarkMode] = useDarkMode();

  const bannerSrc = useMemo(() => (isDarkMode ? '/bannerDark.png' : '/bannerLight.png'), [isDarkMode]);

  return (
    <Centred>
      <BigLogo src={bannerSrc} alt={t('homePage.title')} />
      <StackList>
        <img src='https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black' />
        <img src='https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white' />
        <img src='https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=Vite&logoColor=white' />
        <img src='https://img.shields.io/badge/React%20Router-CA4245.svg?style=for-the-badge&logo=React-Router&logoColor=white' />
        <img src='https://img.shields.io/badge/React%20Query-FF4154.svg?style=for-the-badge&logo=React-Query&logoColor=white' />
        <img src='https://img.shields.io/badge/styledcomponents-DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=white' />
        <img src='https://img.shields.io/badge/i18next-26A69A.svg?style=for-the-badge&logo=i18next&logoColor=white' />
        <img src='https://img.shields.io/badge/Recoil-3578E5.svg?style=for-the-badge&logo=Recoil&logoColor=white' />
        <img src='https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=white' />
        <img src='https://img.shields.io/badge/pnpm-F69220.svg?style=for-the-badge&logo=pnpm&logoColor=white' />
        <img src='https://img.shields.io/badge/Vitest-6E9F18.svg?style=for-the-badge&logo=Vitest&logoColor=white' />
        <img src='https://img.shields.io/badge/Prettier-F7B93E.svg?style=for-the-badge&logo=Prettier&logoColor=black' />
        <img src='https://img.shields.io/badge/ESLint-4B32C3.svg?style=for-the-badge&logo=ESLint&logoColor=white' />
      </StackList>
    </Centred>
  );
};
export default Home;