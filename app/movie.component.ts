import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {MovieService} from "./movie.service";
import {Movie} from "./movie.model";
@Component({
    selector: 'movie',
    template: `
        <div class="movie-detail" *ngIf="movie">
            <h2>{{movie.title}}</h2>
            <h3>{{movie.overview}}</h3>
            <span class="close" (click)="close()"></span>
            <img src="http://image.tmdb.org/t/p/w1280{{movie.backdrop_path}}"/>
        </div>
    `,
    providers: [MovieService]
})
export class MovieComponent {

    private movie:Movie;

    constructor(private router:Router, route:ActivatedRoute, movieService:MovieService) {
        route.params.subscribe(params =>
            movieService.movie(params['id']).subscribe(movie =>
                this.movie = movie
            )
        )
    }

    close() {
        this.router.navigate(['/movies']);
    }
}