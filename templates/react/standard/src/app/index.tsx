import { QueryProvider } from './providers/query';
import { Router } from './providers/router';
import { StoreProvider } from './providers/store';
import { GlobalStyles } from './styles/globalStyles';

const App = () => (
  <QueryProvider>
    <StoreProvider>
      <GlobalStyles />
      <Router />
    </StoreProvider>
  </QueryProvider>
);

export { App };
