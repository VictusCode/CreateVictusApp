import ReactDOM from 'react-dom/client';
import { App } from './app';
import { GlobalStyles } from '@app/styles/globalStyles';
import { QueryProvider } from '@app/providers/query';
import { RecoilProvider } from '@app/providers/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <QueryProvider>
      <RecoilProvider>
        <GlobalStyles />
        <App />
      </RecoilProvider>
    </QueryProvider>
  </BrowserRouter>,
);
