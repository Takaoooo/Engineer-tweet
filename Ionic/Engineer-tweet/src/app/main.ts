import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

/// <reference path="./../../typings/globals/jquery/index.d.ts" />

(function() {
	console.log( '$', $.fn.jquery );
}());