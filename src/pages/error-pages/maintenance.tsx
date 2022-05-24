import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Maintenance = asyncComponent(
  () => import('@crema/modules/errorPages/Maintenance'),
);
export default AppPage(() => <Maintenance />);
