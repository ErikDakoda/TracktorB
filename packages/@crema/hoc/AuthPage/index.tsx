import React from "react";
import {compose} from 'redux';
import withData from '../PublicPage/withData';
import withLayout from './withLayout';

export default function AuthPage(element: (props: object) => React.ReactElement<any>): React.ReactElement<any> {
  // @ts-ignore
  return compose(withLayout)(element);
}
