import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const ReactDropzone = asyncComponent(
  () => import('@crema/modules/thirdParty/reactDropzone'),
);
export default AppPage(() => <ReactDropzone />);
