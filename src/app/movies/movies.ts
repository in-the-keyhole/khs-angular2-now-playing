import { MovieService } from '../services/movie.service';
import { Movie } from '../model/movie';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'movies',
  template: `
  <div class="dropdown">
      <button class="dropbtn">See More</button>
      <div class="dropdown-content">
          <a (click)="topRatedMovies();">Top Rated</a>
          <a (click)="nowPlaying();">Now Playing</a>
          <a (click)="upcomingMovies();">Upcoming</a>
          <a (click)="trendingMovies();">Trending</a>
      </div>
  </div>
  <div class="movie-container">
      <h2>{{title}}</h2>
      <input type="text" placeholder="Filter..." [(ngModel)]="filterText" (keyup)="filter()" />
      <ul>
          <div class="now-playing-container" *ngIf="showMovies">
              <li *ngFor="let movie of movies" (click)="showDetail(movie)">
                  <img src="http://image.tmdb.org/t/p/w300{{movie.poster_path}}" />
              </li>
          </div>
          <div class="now-playing-container">
              <li *ngFor="let movie of filteredMovies" (click)="showDetail(movie)">
                  <img src="http://image.tmdb.org/t/p/w300{{movie.poster_path}}" />
              </li>
          </div>
      </ul>
  </div>
`})

export class MovieComponent implements OnInit {
  public movies: any[] = [];
  public filterText: string = "";
  public title: string = "";
  public filteredMovies: any[] = [];
  public showMovies: boolean = true;
  constructor(
    private moviesService: MovieService, private router: Router
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

  showDetail(movie: Movie) {
    this.router.navigate([`movie/${movie.id}`]);
  }

  nowPlaying() {
    this.title = 'Now Playing';
    this.moviesService.nowPlaying().subscribe(movies => this.movies = movies.results);
    this.showMovies = true;
  }

  topRatedMovies() {
    this.title = 'Top Rated';
    this.moviesService.topRatedMovies().subscribe(movies => this.movies = movies.results);
    this.showMovies = true;
  }

  upcomingMovies() {
    this.title = 'Upcoming Movies';
    this.moviesService.upcomingMovies().subscribe(movies => this.movies = movies.results);
    this.showMovies = true;
  }

  trendingMovies() {
    this.title = 'Trending Movies';
    this.moviesService.trendingMovies().subscribe(movies => this.movies = movies.results);
    this.showMovies = true;
  }
}
