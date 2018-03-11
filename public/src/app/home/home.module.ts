import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeService } from "./home.service";
import { HomeComponent } from "./home.component";

@NgModule({
    imports: [CommonModule, HomeRoutingModule],
    providers: [HomeService],
    declarations: [HomeComponent],
})
export class HomeModule { }