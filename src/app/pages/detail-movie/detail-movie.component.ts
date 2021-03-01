import { AfterViewChecked, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})

export class DetailMovieComponent implements OnInit, OnDestroy, AfterViewChecked{


  subMovieId: Subscription
  movieId: any

  //    --- Recebe o MOVIE pelo ID ---
  subMovie: Subscription
  movie: any

  //    --- Get no Cast do Movie ---
  subCast: Subscription
  cast: any

  //    --- Get Director Dentro de Cast ---
  director: any

  //    --- Lista de MOVIES Relacionados por Genero ---
  movieGenres = []
  

  subMoviesRelacionated: Subscription
  moviesRelacionated = []


  constructor(private movieService: MoviesService, private route: ActivatedRoute, private changeDetector: ChangeDetectorRef) {}

  ngAfterViewChecked(){
    this.changeDetector.detectChanges()
  }
  ngOnInit(): void {

    // SubMovieId = Recebe toda essa estrutura | Snapshot quebrou minhas pernas, por que não atualizava. Tirava foto do ID e não mudava ...
    this.subMovieId = this.route.params.subscribe(routeParams => {
      this.movieId = routeParams.id;
    //   --- Recebendo o MOVIE ---
    this.subMovie = this.movieService.getMovie(this.movieId).subscribe(response => {
      this.movie = response
      this.movieGenres = response.genres  
      console.log(this.movieGenres)
      for(let i = 0; i < this.movieGenres.length; i++){
        this.subMoviesRelacionated = this.movieService.getMoviesByGenre(this.movieGenres[i].id).subscribe(response =>{
          this.moviesRelacionated.push(response.results)
        })
      }
      console.log(this.moviesRelacionated)
    })
  
     //   --- Pegando o CAST do MOVIE ---
     this.subCast = this.movieService.getCast(this.movieId).subscribe(response => {
       this.cast = response
       this.director = this.getDirector(this.cast.crew)
     })
    });
    

  }

  ngOnDestroy() {
    this.subCast.unsubscribe()
    this.subMovie.unsubscribe()
    this.subMovieId.unsubscribe()
    this.subMoviesRelacionated.unsubscribe()
  }

  getDirector(crew = []): string {
    for (let director of crew) {
        if(director.job === "Director"){
            return director.name
        }
    }
}

}
