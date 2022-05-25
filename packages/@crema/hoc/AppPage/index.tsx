import React from "react";
import {compose} from 'redux';
import withLayout from './withLayout';
import withData from './withData';

export default function AppPage(element: () => React.ReactElement<any>): unknown {
  // @ts-ignore
  return compose(withData, withLayout)(element);
}
