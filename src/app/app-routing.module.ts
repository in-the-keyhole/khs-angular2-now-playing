import { MoviesComponent } from './movie/movie';
import { MovieComponent } from './movies/movies';
// import { TopRatedComponent } from './top-rated/top-rated'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  {path: 'movies', component: MovieComponent},
  // {path: 'top-rated', component: TopRatedComponent},
  {path: 'movie/:id', component: MoviesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
