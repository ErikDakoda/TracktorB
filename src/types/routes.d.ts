export interface RouteInterface {
  href: string,
  method?: 'GET' | 'POST',
}

export interface RoutesConfig {
  home: RouteInterface,
  account: {
    root: RouteInterface,
    forgottenPassword: RouteInterface,
    resetPassword: RouteInterface,
    verifyEmail: RouteInterface,
    login: RouteInterface,
    signup: RouteInterface,
    profile: RouteInterface,
  },
  common: {
    terms: RouteInterface,
  },
  vn: {
    admin: {
      home: RouteInterface,
      crud: RouteInterface,
    },
  },
}

export interface ApiRoutesConfig {
  account: {
    signup: RouteInterface,
    login: RouteInterface,
    logout: RouteInterface,
    sendResetPasswordEmail: RouteInterface,
    changePassword: RouteInterface,
    verifyEmail: RouteInterface,
    user: RouteInterface,
  },
}
