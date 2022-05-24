import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const FAQ = asyncComponent(() => import('@crema/modules/extraPages/FAQ'));
export default AppPage(() => <FAQ />);
