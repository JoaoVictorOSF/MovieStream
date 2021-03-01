import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-star',
  templateUrl: './movie-star.component.html',
  styleUrls: ['./movie-star.component.scss']
})
export class MovieStarComponent implements OnInit {

  @Input() movieTop = {};
  imgOriginPath:string

  constructor(private movieService: MoviesService) {
    this.imgOriginPath = this.movieService.imagePath;
    console.log(this.movieTop);
  }
  ngOnInit(): void {

  }

}
