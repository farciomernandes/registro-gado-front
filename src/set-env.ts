import * as fs from 'fs';
import * as dotenv from 'dotenv';

dotenv.config();

const envFileContent = `export const environment = {
  production: false,
  apiUrl: '${process.env['API_URL']}',
  firebase: {
    apiKey: '${process.env['FIREBASE_API_KEY']}',
    authDomain: '${process.env['FIREBASE_AUTH_DOMAIN']}',
    projectId: '${process.env['FIREBASE_PROJECT_ID']}',
    storageBucket: '${process.env['FIREBASE_STORAGE_BUCKET']}',
    messagingSenderId: '${process.env['FIREBASE_MESSAGING_SENDER_ID']}',
    appId: '${process.env['FIREBASE_APP_ID']}',
    measurementId: '${process.env['FIREBASE_MEASUREMENT_ID']}',
    vapidKey: '${process.env['FIREBASE_VAPID_KEY']}',
  }
};
`;

fs.writeFileSync('./src/environments/environment.ts', envFileContent);
fs.writeFileSync('./src/environments/environment.prod.ts', envFileContent);
console.log('✅ Environment files generated successfully!');
