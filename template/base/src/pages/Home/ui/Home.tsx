import { Centred } from '@pages/layouts/Centred';
import { t } from 'i18next';

const Home = () => (
  <Centred>
    <img src='../../../../public/BigLogo.png' alt={t('homePage.title')} />
  </Centred>
);
export default Home;
