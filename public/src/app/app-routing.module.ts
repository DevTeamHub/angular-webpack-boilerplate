import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";

export const routes: Routes = [
    { path: "", loadChildren: "./home/home.module#HomeModule", pathMatch: "full" },
    { path: "angular", loadChildren: "./angular-page/angular-page.module#AngularPageModule" },
    { path: "webpack", loadChildren: "./webpack-page/webpack-page.module#WebpackPageModule" },
    { path: "**", redirectTo: "" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: "enabled" })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
