import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const AboutUs = asyncComponent(
  () => import('@crema/modules/extraPages/AboutUs'),
);
export default AppPage(() => <AboutUs />);
