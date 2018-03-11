import { NgModule } from "@angular/core"; 
import { RouterModule, Routes } from "@angular/router";

import { AngularPageComponent } from "./angular-page.component";

const angularPageRoutes: Routes = [
    { path: "", component: AngularPageComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(angularPageRoutes)
    ],
    exports: [RouterModule]
})
export class AngularPageRoutingModule { }