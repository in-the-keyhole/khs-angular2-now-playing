import {Routes, RouterModule} from "@angular/router";
import {MoviesComponent} from "./movies.component";
import {MovieComponent} from "./movie.component";
import {NgModule} from "@angular/core";

const appRoutes: Routes = [
    {path: '', redirectTo: 'movies', pathMatch: 'full'},
    {path: 'movies', component: MoviesComponent},
    {path: 'movies/:id', component: MovieComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}