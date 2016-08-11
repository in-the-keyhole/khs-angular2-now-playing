import {RouterConfig, provideRouter} from "@angular/router";
import {MoviesComponent} from "./movies.component";
import {MovieComponent} from "./movie.component";

const routes:RouterConfig = [
    {path: '', redirectTo: 'movies', pathMatch: 'full'},
    {path: 'movies', component: MoviesComponent},
    {path: 'movies/:id', component: MovieComponent}
];

export const appRouterProviders = [
    provideRouter(routes)
];