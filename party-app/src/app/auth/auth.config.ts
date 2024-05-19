import { PassedInitialConfig } from 'angular-auth-oidc-client';

export const authConfig: PassedInitialConfig = {
  config: {
              authority: 'https://dev-nuecetykz5g7lgw4.us.auth0.com',
              redirectUrl: window.location.origin,
              postLogoutRedirectUri: window.location.origin,
              clientId: 'ydOrSviI3TttnMZwiWmv5VOPqy0GApVi',
              scope: 'openid profile email offline_access', // 'openid profile offline_access ' + your scopes
              responseType: 'code',
              silentRenew: true,
              useRefreshToken: true,
              renewTimeBeforeTokenExpiresInSeconds: 30,
              customParamsAuthRequest: {
                audience:"http://localhost:5133"
              },
             secureRoutes:["http://localhost:5133/api/Profile"]



          }

}
