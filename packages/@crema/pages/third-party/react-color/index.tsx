import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const ReactColor = asyncComponent(
  () => import('@crema/modules/thirdParty/reactColor'),
);
export default AppPage(() => <ReactColor />);
