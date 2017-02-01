import {Component, OnInit} from "@angular/core";
import {Movie} from "./movie.model";
import {MovieService} from "./movie.service";

@Component({
    selector: 'movies',
    template: `
        <div class="movie-container">
            <h2>Now Playing</h2>
            <input type="text" placeholder="Filter..." [(ngModel)]="filterText" (keyup)="filter()"/>
            <ul>
                <li *ngFor="let movie of filteredMovies" [routerLink]="['/movies', movie.id]">
                    <img src="http://image.tmdb.org/t/p/w300{{movie.poster_path}}"/>
                </li>
            </ul>
        </div>
    `
})
export class MoviesComponent implements OnInit {

    private movies: Movie[];
    private filteredMovies: Movie[];
    private filterText: string;

    constructor(private movieService: MovieService) {
    }

    ngOnInit(): void {
        this.movieService.nowPlaying().subscribe(movies => {
            this.movies = movies;
            this.filteredMovies = movies;
        })
    }

    filter(): void {
        this.filteredMovies = this.movies.filter(movie =>
            movie.title.toLowerCase().match(this.filterText.toLowerCase()) != null
        );
    }
}