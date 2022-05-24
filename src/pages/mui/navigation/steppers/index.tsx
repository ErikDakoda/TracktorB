import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Steppers = asyncComponent(
  () => import('@crema/modules/muiComponents/navigation/Stepper'),
);
export default AppPage(() => <Steppers />);
