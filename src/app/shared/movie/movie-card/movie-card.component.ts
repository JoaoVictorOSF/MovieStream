import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() imgCard:string

  // --- Url da API '-'
  imgOriginPath:string

  constructor(private movieService: MoviesService) {
    this.imgOriginPath = this.movieService.imagePath;
  }

  ngOnInit(): void {
    
  }

}
