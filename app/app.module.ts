import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {MoviesComponent} from "./movies.component";
import {MovieService} from "./movie.service";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app.routing";
import {MovieComponent} from "./movie.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        MoviesComponent,
        MovieComponent
    ],
    providers: [
        MovieService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}