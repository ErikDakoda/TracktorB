import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Backdrop = asyncComponent(
  () => import('@crema/modules/muiComponents/feedback/Backdrop'),
);
export default AppPage(() => <Backdrop />);
