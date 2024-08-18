import ReactDOM from 'react-dom/client';
import { i18n } from '@app/configs/i18n';
import { App } from './app';

i18n.init();

const rootElement = document.getElementById('root')!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
