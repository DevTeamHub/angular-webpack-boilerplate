import { Injectable, enableProdMode } from "@angular/core";

export interface IConfiguration {
    production: boolean;
    minify: boolean;
}

declare var configuration: IConfiguration;

@Injectable()
export class ConfigService {

    public static setExecutionMode(): void {
        if (configuration.production) {
            enableProdMode();
        }
    }

}