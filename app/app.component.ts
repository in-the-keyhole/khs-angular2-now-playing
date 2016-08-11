import {Component} from "@angular/core";
import {HTTP_PROVIDERS} from "@angular/http";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {MoviesComponent} from "./movies.component";
import {MovieComponent} from "./movie.component";

@Component({
    selector: 'movie-app',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS],
    precompile: [MoviesComponent, MovieComponent]
})
export class AppComponent {
}