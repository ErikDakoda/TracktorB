import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Error500 = asyncComponent(
  () => import('@crema/modules/errorPages/Error500'),
);
export default AppPage(() => <Error500 />);
