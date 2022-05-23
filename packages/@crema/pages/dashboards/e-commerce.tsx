import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const ECommerce = asyncComponent(
  () => import('@crema/modules/dashboards/ECommerce'),
);
export default AppPage(() => <ECommerce />);
