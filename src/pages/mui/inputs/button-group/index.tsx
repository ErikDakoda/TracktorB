import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const ButtonGroup = asyncComponent(
  () => import('@crema/modules/muiComponents/inputs/ButtonGroup'),
);
export default AppPage(() => <ButtonGroup />);
