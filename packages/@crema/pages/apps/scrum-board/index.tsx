import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const ScrumBoard = asyncComponent(
  () => import('@crema/modules/apps/ScrumBoard'),
);
export default AppPage(() => <ScrumBoard />);
