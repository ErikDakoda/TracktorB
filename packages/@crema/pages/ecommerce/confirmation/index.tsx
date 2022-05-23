import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Confirmation = asyncComponent(
  () => import('@crema/modules/ecommerce/Confirmation'),
);
export default AppPage(() => <Confirmation />);
