import { Color } from './Color';

import {
  MenuStyle,
  ThemeMode,
  ThemeStyle,
  NavStyle,
  LayoutType,
  FooterType,
  HeaderType,
  RouteTransition,
} from "@crema/shared/constants/AppEnums";

export interface SidebarColorSet {
  sidebarBgColor: Color,
  sidebarTextColor: Color,
  sidebarHeaderColor: Color,
  sidebarMenuSelectedBgColor: Color,
  sidebarMenuSelectedTextColor: Color,
  mode: ThemeModeEnum,
}

export interface TextColorSet {
  primary: Color,
  secondary: Color,
  disabled: Color,
}

export interface BackgroundColorSet {
  paper: Color,
  default: Color,
}

export type MenuStyleEnum =
  MenuStyle.DEFAULT |
  MenuStyle.STANDARD |
  MenuStyle.ROUNDED |
  MenuStyle.ROUNDED_REVERSE |
  MenuStyle.CURVED_MENU;

export type ThemeModeEnum =
  ThemeMode.LIGHT |
  ThemeMode.DARK;

export type ThemeStyleEnum =
  ThemeStyle.MODERN |
  ThemeStyle.STANDARD;

export type NavStyleEnum =
  NavStyle.DEFAULT |
  NavStyle.BIT_BUCKET |
  NavStyle.STANDARD |
  NavStyle.DRAWER |
  NavStyle.MINI |
  NavStyle.MINI_SIDEBAR_TOGGLE |
  NavStyle.HEADER_USER |
  NavStyle.HEADER_USER_MINI |
  NavStyle.H_DEFAULT |
  NavStyle.HOR_HEADER_FIXED |
  NavStyle.HOR_DARK_LAYOUT;

export type LayoutTypeEnum =
  LayoutType.FULL_WIDTH |
  LayoutType.BOXED |
  LayoutType.FRAMED;

export type FooterTypeEnum =
  FooterType.FIXED |
  FooterType.FLUID;

export type HeaderTypeEnum =
  HeaderType.DARK |
  HeaderType.LIGHT |
  HeaderType.FIXED;

export type RouteTransitionEnum =
  RouteTransition.NONE |
  RouteTransition.alpha |
  RouteTransition.SLIDE_LEFT |
  RouteTransition.SLIDE_RIGHT |
  RouteTransition.SLIDE_UP |
  RouteTransition.SLIDE_DOWN;

export interface TemplateConfig {
  sidebar: {
    borderColor: Color,
    menuStyle: MenuStyleEnum,
    isSidebarBgImage: boolean,
    sidebarBgImage: string,
    colorSet: SidebarColorSet,
  },
  textLight: TextColorSet,
  textDark: TextColorSet,
  backgroundLight: BackgroundColorSet,
  backgroundDark: BackgroundColorSet,
  sidebarLight: SidebarColorSet,
  sidebarDark: SidebarColorSet,
  themeStyle: ThemeStyleEnum,
  themeMode: ThemeModeEnum,
  navStyle: NavStyleEnum,
  layoutType: LayoutTypeEnum,
  footerType: FooterTypeEnum,
  headerType: HeaderTypeEnum,
  rtAnim: RouteTransitionEnum,
  footer: boolean,
  locale: {
    languageId: string,
    locale: string,
    name: string,
    icon: string,
  },
  rtlLocale: array<string>,
}
