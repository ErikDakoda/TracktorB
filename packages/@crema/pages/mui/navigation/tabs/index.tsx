import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Tabs = asyncComponent(
  () => import('@crema/modules/muiComponents/navigation/Tabs'),
);
export default AppPage(() => <Tabs />);
