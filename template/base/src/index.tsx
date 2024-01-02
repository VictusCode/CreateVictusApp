import RecoilProvider from '@app/providers/RecoilProvider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { GlobalStyles } from '@app/styles/globalStyles';
import { QueryProvider } from '@app/providers/QueryProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryProvider>
      <RecoilProvider>
        <GlobalStyles />
        <App />
      </RecoilProvider>
    </QueryProvider>
  </React.StrictMode>,
);
