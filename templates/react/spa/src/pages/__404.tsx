import { useTranslation } from 'react-i18next';
import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

export const Route = createFileRoute('/__404')({
  component: () => <div></div>,
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100%;
`;

const NotFound = () => {
  const { t } = useTranslation();

  return <Container>{t('notFoundPage.title')}</Container>;
};
