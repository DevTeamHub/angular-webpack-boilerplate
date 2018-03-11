import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { WebpackPageRoutingModule } from "./webpack-page-routing.module";
import { WebpackPageService } from "./webpack-page.service";
import { WebpackPageComponent } from "./webpack-page.component";

@NgModule({
    imports: [CommonModule, WebpackPageRoutingModule],
    providers: [WebpackPageService],
    declarations: [WebpackPageComponent],
})
export class WebpackPageModule { }