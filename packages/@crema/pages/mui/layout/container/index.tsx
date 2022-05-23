import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Container = asyncComponent(
  () => import('@crema/modules/muiComponents/layout/Container'),
);
export default AppPage(() => <Container />);
