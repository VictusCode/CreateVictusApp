import { useTranslation } from 'react-i18next';
import { Centred } from '@app/layouts/Centred';

const Loading = () => {
  const { t } = useTranslation();

  return <Centred>{t('loadingPage.title')}</Centred>;
};

export { Loading };
