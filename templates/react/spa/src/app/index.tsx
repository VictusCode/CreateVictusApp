import { QueryProvider } from './providers/query';
import { Router } from './providers/router';
import { GlobalStyles } from './styles/globalStyles';

const App = () => (
  <QueryProvider>
    <GlobalStyles />
    <Router />
  </QueryProvider>
);

export { App };
