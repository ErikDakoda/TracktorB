import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Rating = asyncComponent(
  () => import('@crema/modules/muiComponents/inputs/Rating'),
);
export default AppPage(() => <Rating />);
