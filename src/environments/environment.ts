// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDUXztorxGbCkvYkLls5a1LtLMA6yvaOxs',
    authDomain: 'weatherapp-2e8e9.firebaseapp.com',
    databaseURL: 'https://weatherapp-2e8e9.firebaseio.com',
    projectId: 'weatherapp-2e8e9',
    storageBucket: 'weatherapp-2e8e9.appspot.com',
    messagingSenderId: '8310454804'
  }
};

/*
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
    */

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
