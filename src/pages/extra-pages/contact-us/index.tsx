import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const ContactUs = asyncComponent(() => import('@crema/modules/extraPages/ContactUs'));
export default AppPage(() => <ContactUs />);
