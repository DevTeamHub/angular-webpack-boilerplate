import { Component } from "@angular/core";

import { AngularPageService } from "./angular-page.service";

@Component({
    selector: "angular-page",
    templateUrl: "./angular-page.template.html",
    styleUrls: ["./angular-page.style.scss"]
})
export class AngularPageComponent {

    constructor(private angularPageService: AngularPageService) { }
}