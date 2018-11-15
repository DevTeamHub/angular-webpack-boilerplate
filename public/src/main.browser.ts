
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"; 
import { AppModule } from "./app/app.module";
import { ConfigService } from "./app/services/config.service";

ConfigService.setExecutionMode();

platformBrowserDynamic().bootstrapModule(AppModule);