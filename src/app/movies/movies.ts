import { MovieService } from '../services/movie.service.gql';
import { Movie } from '../model/movie';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Movies } from '../model/movies';

@Component({
  selector: 'movies',
  template: `
  <div class="movie-container">
      <h2>Now Playing!</h2>
      <input type="text" placeholder="Filter..." [(ngModel)]="filterText" (keyup)="filter()">
      <ul>
        <div class='now-playing-container' *ngIf="showMovies">
        <li *ngFor="let movie of movies" (click)="showDetail(movie)">
              <img src="http://image.tmdb.org/t/p/w300{{movie.poster_path}}"/>
          </li>
        </div>
        <div class='now-playing-container'>
          <li *ngFor="let movie of filteredMovies" (click)="showDetail(movie)">
              <img src="http://image.tmdb.org/t/p/w300{{movie.poster_path}}"/>
          </li>
          </div>
      </ul>
  </div>
`})

export class MovieComponent implements OnInit {
  movies: Movie[] = [];
  
  public filterText:string = "";
  //public filteredMovies!: Movies;
  public filteredMovies:any[] = [];
  public showMovies: boolean = true;
  constructor(
    private moviesService: MovieService, private router:Router
  ) { }

  async ngOnInit(): Promise<void> {
    await this.nowPlaying();
  }

  filter() {
    this.showMovies = false;
    //this.filteredMovies = this.movies;
    this.filteredMovies = this.movies.filter(movie =>
        movie.title.toLowerCase().match(this.filterText) !== null
    )
  }

  showDetail(movie:Movie) {
    this.router.navigate([`movie/${movie.id}`]);
  }

  async nowPlaying() {    
    const result = await this.moviesService.nowPlaying();
    this.movies = result;
    this.showMovies = true;
  }
}
