import { MovieService } from '../services/movie.service.gql';
import { Movie } from '../model/movie';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'movies',
  template: `
  <div class="movie-container">
      <h2>Now Playing</h2>
      <input type="text" placeholder="Filter..." [(ngModel)]="filterText" (keyup)="filter()">
      <ul>
        <div class='now-playing-container' *ngIf="showMovies">
        <li class="movies-images" *ngFor="let movie of movies" (click)="showDetail(movie)">
              <img class="movies-images"  src="{{movie.posterPathW342}}"/>
          </li>
        </div>
        <div class='now-playing-container'>
          <li class="movies-images" *ngFor="let movie of filteredMovies" (click)="showDetail(movie)">
              <img class="movies-images" src="{{movie.posterPathW342}}" />
          </li>
          </div>
      </ul>
  </div>
`})

export class MovieComponent implements OnInit {
  movies: Movie[] = [];
    
  public filterText:string = "";
  public filteredMovies:any[] = [];
  public showMovies: boolean = true;
  constructor(
    private moviesService: MovieService, private router:Router
  ) { }

  ngOnInit(): void {
    this.nowPlaying();
  }

  filter() {
    this.showMovies = false;
    this.filteredMovies = this.movies.filter(movie =>
        movie.title.toLowerCase().match(this.filterText) !== null
    )
  }

  showDetail(movie:Movie) {
    this.router.navigate([`movie/${movie.id}`]);
  }

  
  async nowPlaying() {      
    const movies = await this.moviesService.nowPlaying();
    this.movies = movies.results;
    this.showMovies = true;
    
  }
}
