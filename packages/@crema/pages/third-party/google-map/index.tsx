import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const GoogleMap = asyncComponent(
  () => import('@crema/modules/thirdParty/googleMap'),
);
export default AppPage(() => <GoogleMap />);
