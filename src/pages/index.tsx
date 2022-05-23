import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const HomePage = asyncComponent(() => import('./HomePage'));
export default AppPage(() => <HomePage />);
