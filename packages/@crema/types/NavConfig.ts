import React from "react";
import { Color } from './Color';

export type NavConfigItemTypeEnum =  'group' | 'collapse' | 'item' | 'divider';

export interface NavConfigItem {
  id: string,
  title: string,
  messageId: string,
  type: NavConfigItemTypeEnum,
  count?: number,
  icon?: string | React.ReactElement<any, any>,
  color?: Color,
  url?: string,
  as?: string,
  children?: Array<NavConfigItem>,
}

export type NavConfig = Array<NavConfigItem>;
