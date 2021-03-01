import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit{
  @Input() imgCard:string
  //    --- Url Origin da API + path ---
  imgOriginPath:string

  @Input() movie: any

  @Input() cast: any
  @Input() director: any
  
  constructor(private movieService: MoviesService) {

  }

  ngOnInit(): void {
    //   --- IMG para o Fundo ---
    this.imgOriginPath = this.movieService.imagePath;

   
    
  }
}
