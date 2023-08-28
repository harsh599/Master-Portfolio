import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule) // the module which will be bootstrapped(boostrap => starting point)
  .catch((err) => console.error(err));
