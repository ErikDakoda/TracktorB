import React from 'react';
import asyncComponent from '@crema/utility/asyncComponent';
import AppPage from '@crema/hoc/AppPage';

const TimePicker = asyncComponent(
  () => import('@crema/modules/muiComponents/lab/dateTime/TimePicker'),
);
export default AppPage(() => <TimePicker />);
