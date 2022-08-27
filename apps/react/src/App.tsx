import { FC, Suspense } from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { LoadingPage } from './shared/components/LoadingPage';
import { RootRouter } from './routes/RootRouter';
import { store } from './store';

export const App: FC = () => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <Suspense fallback={<LoadingPage />}>
          <RootRouter />
        </Suspense>
      </div>
    </HashRouter>
  </Provider>
);
