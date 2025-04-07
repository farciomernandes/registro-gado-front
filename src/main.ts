import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/firebase-messaging-sw.js')
    .then(reg => console.log('✅ SW registrado:', reg))
    .catch(err => console.error('Erro ao registrar SW:', err));
}



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
