import { MovieService } from '../services/movie.service.gql';
import { Movie } from '../model/movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'movie',
  template: `
  <div class="movie-detail" *ngIf="movie">
      <h2>{{movie.title}}</h2>
      <span class="close" (click)="close()"></span>
      <img src="{{movie.backdropPathW1280}}"/>
  </div>
  <div>
  <h3>{{movie.overview}}</h3>
</div>
`,
})
export class MoviesComponent implements OnInit {

  movie!: Movie;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location, private router:Router
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
    this.movie = await this.movieService.movie(id); 
    
  }

  getFormattedTime(min: number) {
    var inp = new Date(0, 0, 0, 0, min, 0);
    var m = inp.getMinutes();
    var h = inp.getHours();

    return h + 'h ' + m + 'm ';
  }

}
