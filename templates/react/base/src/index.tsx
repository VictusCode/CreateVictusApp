import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { i18n } from '@app/configs/i18n';
import { QueryProvider } from '@app/providers/query';
import { StoreProvider } from '@app/providers/store';
import { GlobalStyles } from '@app/styles/globalStyles';
import { App } from './app';

i18n.init();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <QueryProvider>
      <StoreProvider>
        <GlobalStyles />
        <App />
      </StoreProvider>
    </QueryProvider>
  </BrowserRouter>,
);
