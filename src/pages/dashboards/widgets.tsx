import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Widgets = asyncComponent(
  () => import('@crema/modules/dashboards/Widgets'),
);
export default AppPage(() => <Widgets />);
