import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Mail = asyncComponent(() => import('@crema/modules/apps/Mail'));
export default AppPage(() => <Mail />);
