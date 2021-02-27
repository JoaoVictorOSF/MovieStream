import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './shared/movie/movie.component';
import { MovieCardComponent } from './shared/movie/movie-card/movie-card.component';
import { MovieTitleComponent } from './shared/movie/movie-title/movie-title.component';
import { MovieDetailsComponent } from './shared/movie/movie-details/movie-details.component';
import { MovieListComponent } from './shared/movie/movie-list/movie-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    MovieCardComponent,
    MovieTitleComponent,
    MovieDetailsComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
