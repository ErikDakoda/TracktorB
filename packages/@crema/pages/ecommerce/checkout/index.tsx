import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Checkout = asyncComponent(
  () => import('@crema/modules/ecommerce/Checkout'),
);
export default AppPage(() => <Checkout />);
