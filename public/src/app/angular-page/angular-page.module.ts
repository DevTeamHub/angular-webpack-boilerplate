import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AngularPageRoutingModule } from "./angular-page-routing.module";
import { AngularPageService } from "./angular-page.service";
import { AngularPageComponent } from "./angular-page.component";

@NgModule({
    imports: [CommonModule, AngularPageRoutingModule],
    providers: [AngularPageService],
    declarations: [AngularPageComponent],
})
export class AngularPageModule { }