import { MoviesComponent } from './movie/movie';
import { MovieComponent } from './movies/movies';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  {path: 'movies', component: MovieComponent},
  {path: 'movie/:id', component: MoviesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
