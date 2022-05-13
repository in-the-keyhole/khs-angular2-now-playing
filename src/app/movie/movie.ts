import { MovieService } from '../services/movie.service';
import { Movie } from '../model/movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from "@angular/router";

@Component({
  selector: 'movie',
  template: `
  <h2>{{movie.title}}</h2>
  <div class="container">
      <div class="image">
          <img src="http://image.tmdb.org/t/p/w1280{{movie.poster_path}}" />
      </div>
      <div class="text">
          <div>Released: {{movie.release_date}}</div>
          <div>Rating: {{movie.vote_average}}</div>
          <br />
          <div>
              {{movie.overview}}
          </div>
      </div>
  </div>
  `,
})
export class MoviesComponent implements OnInit {

  movie!: Movie;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location, private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        let id = params['id'];
        if (id) this.getDetail(id);
      }
    );
  }

  close() {
    this.router.navigate(['/movies']);
  }

  getDetail(id: number) {
    this.movieService.movie(id).subscribe(movieDetail => this.movie = movieDetail)
  }

  getFormattedTime(min: number) {
    var inp = new Date(0, 0, 0, 0, min, 0);
    var m = inp.getMinutes();
    var h = inp.getHours();

    return h + 'h ' + m + 'm ';
  }

}
