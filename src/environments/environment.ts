// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {KeycloakConfig} from 'keycloak-angular';
export const kcConfig: KeycloakConfig = {
  url: 'https://sso-keycloak.geeks18/auth',
  realm: 'Staging-Realm',
  clientId: 'c5912b69',
  credentials: {secret: 'cf6610b6e9fc8c665f89e510045fb8c3'},
};
export const environment: any = {
  production: false,
  recipeService: 'https://api-3scale-apicast.geeks18:443/geeks18/recipe',
  profileService: 'https://api-3scale-apicast.geeks18:443/geeks18/user',
  keycloakConfig: kcConfig,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


