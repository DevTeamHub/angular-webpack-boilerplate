import { NgModule } from "@angular/core"; 
import { RouterModule, Routes } from "@angular/router";

import { WebpackPageComponent } from "./webpack-page.component";

const webpackPageRoutes: Routes = [
    { path: "", component: WebpackPageComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(webpackPageRoutes)
    ],
    exports: [RouterModule]
})
export class WebpackPageRoutingModule { }