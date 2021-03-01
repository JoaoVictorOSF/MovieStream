import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-gender',
  templateUrl: './movie-gender.component.html',
  styleUrls: ['./movie-gender.component.scss']
})
export class MovieGenderComponent implements OnInit {

  genres = []
  subGenres: Subscription

  moviesListGenre = []
  subMoviesListGenre: Subscription
  
  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    // ---- | CREATE ARRAY OF GENRES | ---0
    this.subGenres = this.movieService.getGenresMovies().subscribe(response => {
      this.genres = response.genres
      console.log(this.genres);
      for(let i = 0; i < this.genres.length; i++){
        this.separeByGenre(this.genres[i].id)
      }
    })
    
  }


  separeByGenre(id: number){
    this.subMoviesListGenre = this.movieService.getMoviesByGenre(id).subscribe(response =>{
      this.moviesListGenre.push(response.results.slice())
    })
  }

  ngOnDestroy() {
    this.subGenres.unsubscribe()
    this.subMoviesListGenre.unsubscribe()

  }
  
}
