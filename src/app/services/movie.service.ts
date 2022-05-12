import { Movies } from './../model/movies';
import { Movie } from './../model/movie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url = 'https://api.themoviedb.org/3/movie/';
  private apiKey = 'cf86200f49581725c527db61a5b017c6';

  constructor(
    private http: HttpClient
  ) { }

  nowPlaying() {
    let movieurl = `${this.url}now_playing?api_key=${this.apiKey}`;
    return this.http.get<Movies>(movieurl)
    .pipe (
      catchError(this.handleError<Movies>('nowPlaying'))
    )
  }

  movie(id : number) {
    let detailsUrl = `${this.url}${id}?api_key=${this.apiKey}`;
    return this.http.get<Movie>(detailsUrl)
    .pipe (
      catchError(this.handleError<any>('topRatedMovies'))
    )
  }

  topRatedMovies() {
    let movieurl = `${this.url}top_rated?api_key=${this.apiKey}`;
    return this.http.get<Movies>(movieurl)
    .pipe (
      catchError(this.handleError<Movies>('topRatedMovies'))
    )
  }

  upcomingMovies() {
    let movieurl = `${this.url}upcoming?api_key=${this.apiKey}`;
    return this.http.get<Movies>(movieurl)
    .pipe (
      catchError(this.handleError<Movies>('upcomingMovies'))
    )
  }

  trendingMovies() {
    let movieurl = `${this.url}popular?api_key=${this.apiKey}`;
    return this.http.get<Movies>(movieurl)
    .pipe (
      catchError(this.handleError<Movies>('trendingMovies'))
    )
  }
  
  /**
 * @param operation
 * @param result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}
