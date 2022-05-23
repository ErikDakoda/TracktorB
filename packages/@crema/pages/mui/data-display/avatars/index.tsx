import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Avatars = asyncComponent(
  () => import('@crema/modules/muiComponents/dataDisplay/Avatar'),
);
export default AppPage(() => <Avatars />);
