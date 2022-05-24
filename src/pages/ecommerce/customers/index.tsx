import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Customers = asyncComponent(
  () => import('@crema/modules/ecommerce/Customers'),
);
export default AppPage(() => <Customers />);
