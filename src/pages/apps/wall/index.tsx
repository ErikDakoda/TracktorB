import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Wall = asyncComponent(() => import('@crema/modules/apps/Wall'));
export default AppPage(() => <Wall />);
