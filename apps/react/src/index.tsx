import { SnackbarProvider } from 'notistack';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import '@js-camp/theme/src/index.css';

import { App } from './App';
import { CloseSnackbarAction } from './config/SnackbarAction';

const rootElement: HTMLElement | null = document.getElementById('root');
if (rootElement === null) {
  throw new Error('Failed to find root element');
}

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <SnackbarProvider
      maxSnack={3}
      action={key => <CloseSnackbarAction id={key} />}
    >
      <App />
    </SnackbarProvider>
  </StrictMode>,
);
