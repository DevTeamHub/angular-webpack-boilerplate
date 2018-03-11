import { Component } from "@angular/core";

import { HomeService } from "./home.service";

@Component({
    selector: "home",
    templateUrl: "./home.template.html",
    styleUrls: ["./home.style.scss"]
})
export class HomeComponent {

    constructor(private homeService: HomeService) { }
}