import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, appRoutingProviders} from './app.routes';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

import {AppComponent}  from './app.component';
import {MovieComponent} from "./movie.component";
import {MoviesComponent} from "./movies.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        MoviesComponent,
        MovieComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
