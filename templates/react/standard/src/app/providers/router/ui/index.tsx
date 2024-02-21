import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routesConfig } from '@app/configs/router';
import Loading from '@pages/Loading';

const Router = () => (
  <Suspense fallback={<Loading />}>
    <Routes>
      {Object.values(routesConfig).map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </Routes>
  </Suspense>
);

export { Router };
