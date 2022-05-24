import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const TimeLine = asyncComponent(
  () => import('@crema/modules/thirdParty/reactSlick'),
);
export default AppPage(() => <TimeLine />);
