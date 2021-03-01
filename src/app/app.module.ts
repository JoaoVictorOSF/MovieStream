import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './shared/movie/movie.component';
import { MovieCardComponent } from './shared/movie/movie-card/movie-card.component';
import { MovieTitleComponent } from './shared/movie/movie-title/movie-title.component';
import { MovieDetailsComponent } from './shared/movie/movie-details/movie-details.component';
import { MovieListComponent } from './shared/movie/movie-list/movie-list.component';
import { MovieGenderComponent } from './shared/movie/movie-gender/movie-gender.component';
import { MovieStarComponent } from './shared/movie/movie-star/movie-star.component';
import { DetailMovieComponent } from './pages/detail-movie/detail-movie.component';
import { HeaderComponent } from './shared/header/header.component';
import { HideMenuComponent } from './shared/header/hide-menu/hide-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    MovieCardComponent,
    MovieTitleComponent,
    MovieDetailsComponent,
    MovieListComponent,
    MovieGenderComponent,
    MovieStarComponent,
    DetailMovieComponent,
    HeaderComponent,
    HideMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
