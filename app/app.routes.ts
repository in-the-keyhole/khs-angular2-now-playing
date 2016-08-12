import {Routes, RouterModule} from '@angular/router';
import {MoviesComponent} from "./movies.component";
import {MovieComponent} from "./movie.component";

const appRoutes:Routes = [
    {path: '', redirectTo: 'movies', pathMatch: 'full'},
    {path: 'movies', component: MoviesComponent},
    {path: 'movies/:id', component: MovieComponent}
];

export const appRoutingProviders:any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
