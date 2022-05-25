import React from "react";
import {compose} from 'redux';
import withData from './withData';
import withLayout from './withLayout';

export default function DefaultPage(element: () => React.ReactElement<any>): React.ReactElement<any> {
  // @ts-ignore
  return compose(withData, withLayout)(element);
}
