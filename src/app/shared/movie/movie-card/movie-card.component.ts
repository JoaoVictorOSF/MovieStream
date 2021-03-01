import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() imgCard: string
  //              --- Url da API '-' ---
  // -    Tive que utilizar o url de origem da API    -
  imgOriginPath: string

  //                 --- Esquema de Route ---
  // - Link do card para a página de detalhes partir do ID -
  @Input() movieId: string


  constructor(private movieService: MoviesService, private route: Router) {
    this.imgOriginPath = this.movieService.imagePath;
  }

  ngOnInit(): void {
    
  }

  goTo(){
      this.route.navigate([`/movie-details/${this.movieId}`])
  }
}
