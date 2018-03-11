import { Component } from "@angular/core";

import { WebpackPageService } from "./webpack-page.service";

@Component({
    selector: "webpack-page",
    templateUrl: "./webpack-page.template.html",
    styleUrls: ["./webpack-page.style.scss"]
})
export class WebpackPageComponent {

    constructor(private webpackPageService: WebpackPageService) { }
}