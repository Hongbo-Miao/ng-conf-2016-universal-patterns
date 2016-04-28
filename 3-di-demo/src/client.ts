import 'angular2-universal/polyfills';

import {
  bootstrap,
  enableProdMode,
  BROWSER_ROUTER_PROVIDERS,
  BROWSER_HTTP_PROVIDERS
} from 'angular2-universal';

import {BROWSER_STORE_PROVIDERS} from './universal-store/src/browser';

import {App} from './app/app.component';

enableProdMode();


bootstrap(App, [
  ...BROWSER_ROUTER_PROVIDERS,
  ...BROWSER_HTTP_PROVIDERS,
  ...BROWSER_STORE_PROVIDERS
]);
