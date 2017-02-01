import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "./movie.service";
import {Movie} from "./movie.model";

@Component({
    template: `
        <div class="movie-detail" *ngIf="movie">
            <h2>{{movie.title}}</h2>
            <h3>{{movie.overview}}</h3>
            <span class="close" [routerLink]="['/movies']"></span>
            <img src="http://image.tmdb.org/t/p/w1280{{movie.backdrop_path}}"/>
        </div>
    `
})
export class MovieComponent implements OnInit {

    private movie: Movie;

    constructor(private route: ActivatedRoute, private movieService: MovieService) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params =>
            this.movieService.movie(params['id']).subscribe(movie =>
                this.movie = movie
            )
        )
    }
}