import React from 'react';
import asyncComponent from '@crema/utility/asyncComponent';
import AppPage from '@crema/hoc/AppPage';

const DateRangePicker = asyncComponent(
  () => import('@crema/modules/muiComponents/lab/DateRangePicker'),
);
export default AppPage(() => <DateRangePicker />);
