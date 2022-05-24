import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Portfolio = asyncComponent(
  () => import('@crema/modules/extraPages/Portfolio'),
);
export default AppPage(() => <Portfolio />);
